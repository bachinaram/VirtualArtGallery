/*AFRAME.registerComponent('clickImage', {
  init: function () {
    // Solution for Handling Events.
    var sceneEl = document.querySelector('a-scene'); 
    var boxEl = sceneEl.querySelector('a-plane')
    boxEl.addEventListener('clickImage', function () {
      boxEl.setAttribute('color', 'blue');  
    });
    boxEl.emit('foo');
  }
});*/

AFRAME.registerComponent("clickimage", {
    init: function() {
        this.el.addEventListener("click", function(evt) {
            console.log("testing string")
        })
    }
});

AFRAME.registerComponent('foo', {
    init: function() {
        camera_left_x = -2.7, camera_right_x = 2.7, camera_forward_z = -7
            //left_wall_x=-2.7,right_wall_x=2.7
        left_wall_z = -7, right_wall_z = -7
        center_z = camera_forward_z / 2;
        myPlane = -9;
        closingDoor = -4;
        //myEndWall(-10)
    }
});


AFRAME.registerComponent('rotation-reader', {
    tick: function() {
        myStartPosition_x = this.el.object3D.position.x
        myStartPosition_z = this.el.object3D.position.z
            // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
            //contains x,y,z
        myStartBeta = this.el.object3D.rotation.y;
        // console.log("leftwall_z : " + left_wall_z)
        //console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
        if (((myStartPosition_x < camera_right_x) && (myStartPosition_x > camera_left_x)) && (myStartPosition_z < left_wall_z)) {
            console.log("leftwall_z : " + left_wall_z);
            //camera_forward_z=camera_forward_z-6;
            // closingDoor=closingDoor-6;
            //myPlane = room(camera_forward_z,myPlane,closingDoor);
            getValuesFromPathGen();
        }
    }
});



function getValuesFromPathGen() {
    var flag = true;
    var beta, p1_x = 0;
    // var p1_y = 2.5;
    var p1_z = -10;
    if (flag == true) {
        beta = 3.14; // 135 deg
        //beta = 2.35619; // 135 deg
        flag = false;
    } else {
        beta = 3.14; // 225 deg
        //beta = 3.92699; // 225 deg
        flag = true;
    }
    var p2_x, p2_z, p2_beta;
    var apiJson = {}
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    var myUrl = `http://pathgen.herokuapp.com/newpoint?x=${p1_x}&z=${p1_z}&beta=${beta}&length=6&gennewbeta=0`
    req.open('GET', myUrl, true);
    req.onload = () => {
        apiJson = req.response;
        p2_beta = apiJson.new_beta;
        p2_x = apiJson.new_point[0];
        p2_z = apiJson.new_point[1];
        console.log("p2 points : " + p2_x, p2_z, p2_beta);
        create_room(p1_x, p1_z, p2_x, p2_z, beta, flag);
        p1_x = p2_x;
        p1_z = p2_z;
        flag = !flag;
    };
    req.send();
}

var room_width = 6;
var room_height = 5;
var room_depth = 6;

function create_room(p1_x, p1_z, p2_x, p2_z, beta, flag) {
    console.log("rom parameter : " + p1_x, p1_z, p2_x, p2_z, beta, flag)
    var room_centre_x = (p1_x + p2_x) / 2;
    var room_centre_z = (p1_z + p2_z) / 2;
    var beta_degree;
    if (beta == 2.35619)
        beta_degree = -45;
    else
        beta_degree = 45;

    left_wall_x = room_centre_x - (room_width / 2);
    right_wall_x = room_centre_x + (room_width / 2);

    left_wall_z = room_centre_z;
    right_wall_z = room_centre_z;

    room(left_wall_x, right_wall_x, left_wall_z, right_wall_z, beta_degree, room_centre_x, room_centre_z)
        //left_wall
        // create_wall(left_wall_x, left_wall_z, beta_degree);
        //right wall
        // create_wall(right_wall_x, right_wall_z, beta_degree);

    // similarly 3 planes on left wall and 3 on right wall
}

function room(left_wall_x, right_wall_x, left_wall_z, right_wall_z, beta_degree, room_centre_x, room_centre_z) {
    beta_degree = 180
    console.log("leftwallx " + left_wall_x)
    console.log("z is " + left_wall_z)
    console.log("beta is " + beta_degree)
    var sceneEl = document.querySelector('a-scene');
    //right wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: right_wall_x, y: 2.5, z: right_wall_z });
    entityEl.setAttribute('rotation', { x: 0, y: beta_degree, z: 0 });
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //left wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: left_wall_x, y: 2.5, z: left_wall_z });
    entityEl.setAttribute('rotation', { x: 0, y: beta_degree, z: 0 });
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    // //ceiling wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: 0, y: 4.75, z: room_centre_z });
    entityEl.setAttribute('rotation', { x: 0, y: 0, z: 90 });
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.6');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    // //floor
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('material', { src: '#GalFloor' });
    entityEl.setAttribute('position', { x: 0, y: 0.15, z: room_centre_z });
    entityEl.setAttribute('rotation', { x: 0, y: 0, z: 90 });
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    // //chandeleur 
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/chandeleur/chandeleur.gltf)");
    entityEl.setAttribute('position', { x: 0, y: 3, z: room_centre_z });
    entityEl.setAttribute('rotation', { x: 360, y: 0, z: 0 });
    entityEl.setAttribute('scale', { x: 0.04, y: 0.04, z: 0.04 });
    sceneEl.appendChild(entityEl);

    // //security blocker to left
    var entityEl1 = document.createElement('a-entity');
    entityEl1.setAttribute('gltf-model', "url(assets/images/gltf/fence/scene.gltf)");
    entityEl1.setAttribute('scale', { x: 0.1, y: 0.2, z: 0.2 });
    entityEl1.setAttribute('position', { x: -0.5, y: 0.6, z: left_wall_z });
    sceneEl.appendChild(entityEl1);

    // //security blocker to right
    var entityEl2 = document.createElement('a-entity');
    entityEl2.setAttribute('gltf-model', "url(assets/images/gltf/fence/scene.gltf)");
    entityEl2.setAttribute('scale', { x: 0.1, y: 0.2, z: 0.2 });
    entityEl2.setAttribute('position', { x: 2.55, y: 0.6, z: left_wall_z });
    sceneEl.appendChild(entityEl2);

    // myEndWall(left_wall_z)
    // myEndWall(left_wall_z - 6)

    myPlane_z = left_wall_z + 2
    for (j = 0; j < 3; j++) {

        //myPlane = myPlane - 2;
        //left planes
        var sceneEl = document.querySelector('a-scene');
        var entityEl = document.createElement('a-plane');
        painting_no = Math.floor(Math.random() * 6);
        var path = `assets/images/paint${painting_no}.jpg`;
        entityEl.setAttribute('material', { src: `url(${path})` });
        entityEl.setAttribute('position', { x: -2.73, y: 2.3, z: myPlane_z });
        entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
        entityEl.setAttribute('color', 'white');
        entityEl.setAttribute('width', '1');
        entityEl.setAttribute('height', '1');
        //entityEl.setAttribute('clickimage', '');
        sceneEl.appendChild(entityEl);
        //console.log(j)
        //left lights zoom-image //entityEl.setAttribute('animation__opacity',{ property: "components.material.material.opacity", from: 0.1, to: 1,  dur: 1500, loop: true, dir:"alternate"});
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
        entityEl.setAttribute('position', { x: -2.55, y: 2.9, z: myPlane_z });
        entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
        entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
        sceneEl.appendChild(entityEl);

        //     //right planes
        var entityEl = document.createElement('a-plane');
        painting_no = Math.floor(Math.random() * 6);
        var path = `assets/images/paint${painting_no}.jpg`;
        entityEl.setAttribute('material', { src: `url(${path})` });
        entityEl.setAttribute('position', { x: 2.73, y: 2.3, z: myPlane_z });
        entityEl.setAttribute('rotation', { x: 0, y: -90, z: 0 });
        entityEl.setAttribute('color', 'white');
        entityEl.setAttribute('width', '1');
        entityEl.setAttribute('height', '1');
        //entityEl.setAttribute('clickimage', '');
        sceneEl.appendChild(entityEl);
        //right lights
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
        entityEl.setAttribute('position', { x: 2.55, y: 2.9, z: myPlane_z });
        entityEl.setAttribute('rotation', { x: 0, y: -90, z: 0 });
        entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
        sceneEl.appendChild(entityEl);

        myPlane_z = myPlane_z - 2;
    }
    // myPlane_z = myPlane_z - 2;
    // return myPlane
}

function myEndWall(left_wall_z) {
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', { opacity: 0.4, transparent: "true", side: "double" });
    entityEl.setAttribute('position', { x: -1.8, y: 2.45, z: left_wall_z });
    entityEl.setAttribute('width', '2');
    entityEl.setAttribute('height', '4.12');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', { opacity: 0.4, transparent: "true", side: "double" });
    entityEl.setAttribute('position', { x: 1.8, y: 2.45, z: left_wall_z });
    entityEl.setAttribute('width', '2');
    entityEl.setAttribute('height', '4.12');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', { opacity: 0.4, transparent: "true", side: "double" });
    entityEl.setAttribute('position', { x: 0, y: 3.7, z: left_wall_z });
    entityEl.setAttribute('width', '1.6');
    entityEl.setAttribute('height', '1.6');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);
}
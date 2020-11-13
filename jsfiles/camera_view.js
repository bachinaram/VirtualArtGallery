AFRAME.registerComponent('rotation-reader', {
    tick: function() {

        myStartPosition_x = this.el.object3D.position.x
            //y always constant which is 1.6
        myStartPosition_z = this.el.object3D.position.z
            // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
            //contains x,y,z
        myStartBeta = this.el.object3D.rotation.y;
        myLength = 2; //this is an assumption that my left and right wall depth is 5
        camera_left_x = -2.7, camera_right_x = 2.7, camera_forward_z = -7.2
            // console.log("hello from camera "
            // console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
        if (((myStartPosition_x < camera_right_x) && (myStartPosition_x > camera_left_x)) && (myStartPosition_z < camera_forward_z)) {
            getValuesFromPathGen(myStartPosition_x, myStartPosition_z, myStartBeta, myLength)
                //var new_values = getValuesFromPathGen(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
                //console.log(new_values)
                //new_position_x=new_values.new_x_point
                //console.log(new_position_x)
                //new_position_z=new_values.new_z_point
                //new_rotation_z=new_values.new_beta_point
                //need to write code here for finding out the mid point of so that we can caliculate left and right of thatt mid point
                //and also from the new room we can get camera position ahead point whenit reaches it must call
                //getVlaues from pathgen function and do the recursion

        }
    }
});

//this function is called recursively once it reaches end of room,
//and it returns new values of x,z position and beta wrt y rotation
//
function getValuesFromPathGen(myPosition_x, myPosition_z, myBeta, myLength) {
    var new_x_point, new_z_point, new_beta_point
    var apiJson = {}
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    var myUrl = `http://pathgen.herokuapp.com/newpoint?x=${myPosition_x}&z=${myPosition_z}&beta=${myBeta}&length=1.23&gennewbeta=1`
    req.open('GET', myUrl, true);
    // console.log("hahaha");
    req.onload = () => {
        apiJson = req.response;
        // newValueUsageFun(apiJson)
        new_beta_point = apiJson.new_beta;
        new_x_point = apiJson.new_point[0];
        new_z_point = apiJson.new_point[1];
        console.log(new_x_point, new_z_point, new_beta_point)
        var i;
        var myZ = -7;
        var myPlane1Z = -9;
        var myPlane2Z = -9;
        console.log("calling room function : fsgs");
        for (i = 0; i < 2; i++) {
            console.log("fhh42359285729879calling room function : fsgs");
            // myPosition_z = this.el.object3D.position.z
            myZ = myZ - 6;
            myPlane1Z = myPlane1Z - 2;
            myPlane2Z = myPlane2Z - 2;
            console.log("calling room function : ");
            room(myZ, myPlane1Z, myPlane2Z)
        }
    };
    req.send();
}



function newValueUsageFun(apiJson) {
    //console.log(apiJson)
    new_beta_point = apiJson.new_beta;
    new_x_point = apiJson.new_point[0];
    new_z_point = apiJson.new_point[1];
    console.log(new_x_point, new_z_point, new_beta_point)
}

function room(myZ, myPlane1Z, myPlane2Z) {
    var sceneEl = document.querySelector('a-scene');

    //right wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: 3, y: 2.5, z: myZ });
    entityEl.setAttribute('rotation', { x: 0, y: 360, z: 0 });
    entityEl.setAttribute('color', 'red');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //left wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: -3, y: 2.5, z: myZ });
    entityEl.setAttribute('rotation', { x: 360, y: 0, z: 0 });
    entityEl.setAttribute('color', 'red');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //ceiling wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', { x: 0, y: 4.75, z: myZ });
    entityEl.setAttribute('rotation', { x: 0, y: 0, z: 90 });
    entityEl.setAttribute('color', 'red');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.6');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //floor
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('material', { src: '#GalFloor' });
    entityEl.setAttribute('position', { x: 0, y: 0.15, z: myZ });
    entityEl.setAttribute('rotation', { x: 0, y: 0, z: 90 });
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //chandeleur 
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/chandeleur/chandeleur.gltf)");
    entityEl.setAttribute('position', { x: 0, y: 3, z: myZ });
    entityEl.setAttribute('rotation', { x: 360, y: 0, z: 0 });
    entityEl.setAttribute('scale', { x: 0.04, y: 0.04, z: 0.04 });
    sceneEl.appendChild(entityEl);
    planeCreation(myPlane1Z, myPlane2Z)
}

function planeCreation(myPlane1Z, myPlane2Z) {
    var sceneEl = document.querySelector('a-scene');
    //creating two planes
    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', { src: '#paint1' });
    entityEl.setAttribute('position', { x: -2.73, y: 2.3, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: -2.55, y: 2.9, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane1Z = myPlane1Z - 2;
    entityEl.setAttribute('material', { src: '#paint2' });
    entityEl.setAttribute('position', { x: -2.73, y: 2.3, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: -2.55, y: 2.9, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane1Z = myPlane1Z - 2;
    entityEl.setAttribute('material', { src: '#paint2' });
    entityEl.setAttribute('position', { x: -2.73, y: 2.3, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: -2.55, y: 2.9, z: myPlane1Z });
    entityEl.setAttribute('rotation', { x: 0, y: 90, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);


    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', { src: '#paint2' });
    entityEl.setAttribute('position', { x: 2.73, y: 2.3, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: -90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: 2.55, y: 2.9, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: 270, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane2Z = myPlane2Z - 2;
    entityEl.setAttribute('material', { src: '#paint2' });
    entityEl.setAttribute('position', { x: 2.73, y: 2.3, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: -90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: 2.55, y: 2.9, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: 270, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane2Z = myPlane2Z - 2;
    entityEl.setAttribute('material', { src: '#paint2' });
    entityEl.setAttribute('position', { x: 2.73, y: 2.3, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: -90, z: 0 });
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', { x: 2.55, y: 2.9, z: myPlane2Z });
    entityEl.setAttribute('rotation', { x: 0, y: 270, z: 0 });
    entityEl.setAttribute('scale', { x: 0.005, y: 0.005, z: 0.005 });
    sceneEl.appendChild(entityEl);
}

/* return code for function
return {
  new_x_point,
  new_z_point,
  new_beta_point

        var i;
  for (i = 0; i < 2; i++) {
    myPosition_z = this.el.object3D.position.z
    room()
  } 
};*/
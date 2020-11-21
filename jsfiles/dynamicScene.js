
AFRAME.registerComponent("clickimage", {
  init: function() {
    this.el.addEventListener("click", function(evt){
      console.log("testing string")
    })}
  });

AFRAME.registerComponent('main_fun', {
  init: function () {
    camera_left_x=-2.7, camera_right_x=2.7, camera_forward_z=-7
    center_z=camera_forward_z/2;
    myPlane=-9;
    closingDoor=-4;
    myEndWall(-10)
    // init_forward_z=-5
    // myPlane = room(init_forward_z,myPlane,closingDoor);
  }
});


AFRAME.registerComponent('looper-rotation-reader', {
  tick: function () {
    myStartPosition_x = this.el.object3D.position.x
    myStartPosition_z = this.el.object3D.position.z
    // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
    //contains x,y,z
    myStartBeta = this.el.object3D.rotation.y;
    //console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
    if(((myStartPosition_x<camera_right_x)&&(myStartPosition_x>camera_left_x)) && (myStartPosition_z<camera_forward_z+1.5)){
      camera_forward_z=camera_forward_z-6;
      closingDoor=closingDoor-6;
      myPlane = room(camera_forward_z,myPlane,closingDoor);
    }
  }
});


function room(camera_forward_z,myPlane,closingDoor){
  
  var sceneEl = document.querySelector('a-scene');
  //right wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: 3, y: 2.5, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 0, y: 360, z: 0});
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);  

    //left wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: -3, y: 2.5, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //ceiling wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: 0, y: 4.75, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
    entityEl.setAttribute('color', '#004d80');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.6');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //floor
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('material', {src: '#GalFloor'});
    entityEl.setAttribute('position', {x: 0, y: 0.15, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5.5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //chandeleur 
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/chandeleur/chandeleur.gltf)");
    entityEl.setAttribute('position', {x: 0, y: 3, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
    entityEl.setAttribute('scale', {x: 0.04, y: 0.04, z: 0.04});
    sceneEl.appendChild(entityEl);
    
    
    scene_z= Math.floor( Math.random() * 2);
    var scene_path=`assets/images/gltf/dynamic_gltf/scene${scene_z}/scene.gltf`;
    //scene at end of room 3d 
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', `url(${scene_path})`);
    entityEl.setAttribute('position', {x: -2, y: 1.5, z: camera_forward_z-1});
    entityEl.setAttribute('rotation', {x: 0, y: 360, z: 0});
    entityEl.setAttribute('scale', {x: 1, y: 1, z: 1});
    sceneEl.appendChild(entityEl);
    

    //security blocker to left
    var entityEl1 = document.createElement('a-entity');
    entityEl1.setAttribute('gltf-model', "url(assets/images/gltf/fence/scene.gltf)");
    entityEl1.setAttribute('scale', {x: 0.1, y: 0.2, z: 0.2});
    entityEl1.setAttribute('position', {x: -0.5, y: 0.6, z: camera_forward_z});
    sceneEl.appendChild(entityEl1);

    //security blocker to right
    var entityEl2 = document.createElement('a-entity');
    entityEl2.setAttribute('gltf-model', "url(assets/images/gltf/fence/scene.gltf)");
    entityEl2.setAttribute('scale', {x: 0.1, y: 0.2, z: 0.2});
    entityEl2.setAttribute('position', {x: 2.55, y:0.6, z: camera_forward_z});
    sceneEl.appendChild(entityEl2);

    myEndWall(closingDoor)
    myEndWall(closingDoor-6)
    

    for(j=0;j<3;j++){
      myPlane=myPlane-2;
      //left planes
      var sceneEl = document.querySelector('a-scene');
      var entityEl = document.createElement('a-plane');
      painting_no= Math.floor( Math.random() * 30);
      var path=`assets/images/paint${painting_no}.jpg`;
      entityEl.setAttribute('material',  {src: `url(${path})`});
      entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: myPlane});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('color', 'white');
      entityEl.setAttribute('width', '1');
      entityEl.setAttribute('height', '1');
      entityEl.setAttribute('clickimage','');
      // entityEl.setAttribute('animation', {
      //           attribute: 'scale', 
      //           dur:500, 
      //           direction:'alternate', 
      //           from:'1 1 1', 
      //           to:'3 3 3', 
      //           begin:'click', 
      //           repeat:1});
      sceneEl.appendChild(entityEl);
      //console.log(j)
      //left lights zoom-image //entityEl.setAttribute('animation__opacity',{ property: "components.material.material.opacity", from: 0.1, to: 1,  dur: 1500, loop: true, dir:"alternate"});
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
      entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: myPlane});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
      sceneEl.appendChild(entityEl);

      //right planes
      var entityEl = document.createElement('a-plane');
      painting_no= Math.floor( Math.random() * 6);
      var path=`assets/images/paint${painting_no}.jpg`;
      entityEl.setAttribute('material',  {src: `url(${path})`});
      entityEl.setAttribute('position', {x: 2.73, y: 2.3, z: myPlane});
      entityEl.setAttribute('rotation', {x: 0, y: -90, z: 0});
      entityEl.setAttribute('color', 'white');
      entityEl.setAttribute('width', '1');
      entityEl.setAttribute('height', '1');
      entityEl.setAttribute('clickimage','');
      /*
      entityEl.setAttribute('animation', {
        attribute: 'scale', 
        dur:500, 
        direction:'alternate', 
        from:'1 1 1', 
        to:'3 3 3', 
        begin:'click', 
        repeat:1});*/
      sceneEl.appendChild(entityEl);
      
      //right lights
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
      entityEl.setAttribute('position', {x: 2.55, y: 2.9, z: myPlane});
      entityEl.setAttribute('rotation', {x: 0, y: -90, z: 0});
      entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
      sceneEl.appendChild(entityEl);
    }
    return myPlane
}

function myEndWall(closingDoor){
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', {opacity: 0.4, transparent: "true", side: "double"});
    entityEl.setAttribute('position', {x: -1.8, y: 2.45, z: closingDoor});
    entityEl.setAttribute('width', '2');
    entityEl.setAttribute('height', '4.12');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', {opacity: 0.4, transparent: "true", side: "double"});
    entityEl.setAttribute('position', {x: 1.8, y: 2.45, z: closingDoor});
    entityEl.setAttribute('width', '2');
    entityEl.setAttribute('height', '4.12');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', {opacity: 0.4, transparent: "true", side: "double"});
    entityEl.setAttribute('position', {x: 0, y: 3.7, z: closingDoor});
    entityEl.setAttribute('width', '1.6');
    entityEl.setAttribute('height', '1.6');
    entityEl.setAttribute('depth', '1');
    entityEl.setAttribute('color', 'white');
    sceneEl.appendChild(entityEl);
}


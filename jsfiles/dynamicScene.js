AFRAME.registerComponent('foo', {
  init: function () {
    camera_left_x=-2.7, camera_right_x=2.7, camera_forward_z=-7.2
    myPlane=-9;
  }
});


AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    myStartPosition_x = this.el.object3D.position.x
    //y always constant which is 1.6
    myStartPosition_z = this.el.object3D.position.z
    // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
    //contains x,y,z
    myStartBeta = this.el.object3D.rotation.y;
    //console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
    if(((myStartPosition_x<camera_right_x)&&(myStartPosition_x>camera_left_x)) && (myStartPosition_z<camera_forward_z)){
      camera_forward_z=camera_forward_z-6;
      myPlane = room(camera_forward_z,myPlane);
    }
  }
});


function room(camera_forward_z,myPlane){
  var sceneEl = document.querySelector('a-scene');
  //right wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: 3, y: 2.5, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 0, y: 360, z: 0});
    entityEl.setAttribute('color', 'red');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);  

    //left wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: -3, y: 2.5, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
    entityEl.setAttribute('color', 'red');
    entityEl.setAttribute('width', '0.5');
    entityEl.setAttribute('height', '5');
    entityEl.setAttribute('depth', '6');
    sceneEl.appendChild(entityEl);

    //ceiling wall
    var entityEl = document.createElement('a-box');
    entityEl.setAttribute('position', {x: 0, y: 4.75, z: camera_forward_z});
    entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
    entityEl.setAttribute('color', 'red');
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
    


    for(j=0;j<3;j++){
      myPlane=myPlane-2;
      //left planes
      var sceneEl = document.querySelector('a-scene');
      var entityEl = document.createElement('a-plane');
      painting_no= Math.floor( Math.random() * 6);
      var path=`assets/images/paint${painting_no}.jpg`;
      entityEl.setAttribute('material',  {src: `url(${path})`});
      entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: myPlane});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('color', 'white');
      entityEl.setAttribute('width', '1');
      entityEl.setAttribute('height', '1');
      sceneEl.appendChild(entityEl);
      console.log(j)
      //left lights
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
      sceneEl.appendChild(entityEl);
      console.log(j)
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

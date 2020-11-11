AFRAME.registerComponent('foo', {
    init: function () {
      var i;
      var myZ=-7;
      var myPlane1Z=-9;
      var myPlane2Z=-9;
      for (i = 0; i < 2; i++) {
        myPosition_z = this.el.object3D.position.z
        myZ=myZ-6;
        myPlane1Z=myPlane1Z-2;
        myPlane2Z=myPlane2Z-2;
        room(myZ,myPlane1Z,myPlane2Z)
      } 
    }
  });

  //we need to pass contant position 7 and add +6 for z 
  function room(myZ,myPlane1Z,myPlane2Z){
    var sceneEl = document.querySelector('a-scene');
    
    //right wall
      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: 3, y: 2.5, z: myZ});
      entityEl.setAttribute('rotation', {x: 0, y: 360, z: 0});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5');
      entityEl.setAttribute('depth', '6');
      sceneEl.appendChild(entityEl);  

      //left wall
      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: -3, y: 2.5, z: myZ});
      entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5');
      entityEl.setAttribute('depth', '6');
      sceneEl.appendChild(entityEl);

      //ceiling wall
      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: 0, y: 4.75, z: myZ});
      entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5.6');
      entityEl.setAttribute('depth', '6');
      sceneEl.appendChild(entityEl);

      //floor
      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('material', {src: '#GalFloor'});
      entityEl.setAttribute('position', {x: 0, y: 0.15, z: myZ});
      entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5.5');
      entityEl.setAttribute('depth', '6');
      sceneEl.appendChild(entityEl);

      //chandeleur 
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('gltf-model', "url(assets/images/gltf/chandeleur/chandeleur.gltf)");
      entityEl.setAttribute('position', {x: 0, y: 3, z: myZ});
      entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
      entityEl.setAttribute('scale', {x: 0.04, y: 0.04, z: 0.04});
      sceneEl.appendChild(entityEl);
      planeCreation(myPlane1Z,myPlane2Z)
  }

  function planeCreation(myPlane1Z,myPlane2Z){
    var sceneEl = document.querySelector('a-scene');
    //creating two planes
    var entityEl = document.createElement('a-plane');
      entityEl.setAttribute('material', {src: '#paint1'});
      entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: myPlane1Z});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('color', 'white');
      entityEl.setAttribute('width', '1');
      entityEl.setAttribute('height', '1');
      sceneEl.appendChild(entityEl);
    //light
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
      entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: myPlane1Z});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
      sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane1Z=myPlane1Z-2;
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: myPlane1Z});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: myPlane1Z});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane1Z=myPlane1Z-2;
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: myPlane1Z});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: myPlane1Z});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    sceneEl.appendChild(entityEl);

    
    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: 2.73, y: 2.3, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: -90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: 2.55, y: 2.9, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: 270, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane2Z=myPlane2Z-2;
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: 2.73, y: 2.3, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: -90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: 2.55, y: 2.9, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: 270, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-plane');
    myPlane2Z=myPlane2Z-2;
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: 2.73, y: 2.3, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: -90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    sceneEl.appendChild(entityEl);
    //light
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: 2.55, y: 2.9, z: myPlane2Z});
    entityEl.setAttribute('rotation', {x: 0, y: 270, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    sceneEl.appendChild(entityEl);
  }











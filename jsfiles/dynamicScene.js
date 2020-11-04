AFRAME.registerComponent('foo', {
    init: function () {
        // Reference to the scene element.
        //leftWall()
        //rightWall()
        room()
    }
  });

  //we need to pass contant position 7 and add +6 for z 
  function room(){
    var sceneEl = document.querySelector('a-scene');
      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: 3, y: 2.5, z: -13});
      entityEl.setAttribute('rotation', {x: 0, y: 360, z: 0});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5');
      entityEl.setAttribute('depth', '6');
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);  

      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: -3, y: 2.5, z: -13});
      entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5');
      entityEl.setAttribute('depth', '6');
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);

      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('position', {x: 0, y: 4.75, z: -13});
      entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
      entityEl.setAttribute('color', 'red');
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5.6');
      entityEl.setAttribute('depth', '6');
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);

      var entityEl = document.createElement('a-box');
      entityEl.setAttribute('material', {src: '#GalFloor'});
      entityEl.setAttribute('position', {x: 0, y: 0.15, z: -13});
      entityEl.setAttribute('rotation', {x: 0, y: 0, z: 90});
      entityEl.setAttribute('width', '0.5');
      entityEl.setAttribute('height', '5.5');
      entityEl.setAttribute('depth', '6');
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);

      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('gltf-model', "url(assets/images/gltf/chandeleur/chandeleur.gltf)");
      entityEl.setAttribute('position', {x: 0, y: 3, z: -13});
      entityEl.setAttribute('rotation', {x: 360, y: 0, z: 0});
      entityEl.setAttribute('scale', {x: 0.04, y: 0.04, z: 0.04});
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);


      planeCreation()
  }

  function planeCreation(){
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-plane');
      entityEl.setAttribute('material', {src: '#paint1'});
      entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: -11});
      entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      entityEl.setAttribute('color', 'white');
      entityEl.setAttribute('width', '1');
      entityEl.setAttribute('height', '1');
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);
    //need to create plane we need to create planes

    var entityEl = document.createElement('a-plane');
    entityEl.setAttribute('material', {src: '#paint2'});
    entityEl.setAttribute('position', {x: -2.73, y: 2.3, z: -13});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('color', 'white');
    entityEl.setAttribute('width', '1');
    entityEl.setAttribute('height', '1');
    // Do `.setAttribute()`s to initialize the entity.
    sceneEl.appendChild(entityEl);
  //need to create plane we need to create planes
  lightCreation()
  }

  function lightCreation(){
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: -11});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    // Do `.setAttribute()`s to initialize the entity.
    sceneEl.appendChild(entityEl);

    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('gltf-model', "url(assets/images/gltf/wallight/wallight.gltf)");
    entityEl.setAttribute('position', {x: -2.55, y: 2.9, z: -13});
    entityEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
    entityEl.setAttribute('scale', {x: 0.005, y: 0.005, z: 0.005});
    // Do `.setAttribute()`s to initialize the entity.
    sceneEl.appendChild(entityEl);

  }
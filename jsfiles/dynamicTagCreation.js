AFRAME.registerComponent('rotation-reader', {
  init: function () {

var sceneEl = document.querySelector('a-scene');
 var entityEl = document.createElement('a-box');
 entityEl.setAttribute('position', {x: 0, y: 2.5, z: -7});
 entityEl.setAttribute('color', 'red');
 // Do `.setAttribute()`s to initialize the entity.
 sceneEl.appendChild(entityEl);
 document.body.appendChild(sceneEl);


 }
});










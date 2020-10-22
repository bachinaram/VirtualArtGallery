AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    
    console.log(this.el.object3D.position.x);
    myPosition_x = this.el.object3D.position.x
    //y always constant which is 1.6
    myPosition_z = this.el.object3D.position.z
    //console.log(this.el.object3D.rotation);
    // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
    //contains x,y,z
  }
});
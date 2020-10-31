

AFRAME.registerComponent('rotation-reader', {
  tick: function () {

    myStartPosition_x = this.el.object3D.position.x
    //y always constant which is 1.6
    myStartPosition_z = this.el.object3D.position.z
    // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
    //contains x,y,z
    myStartBeta = this.el.object3D.rotation.y;
    myLength = 2;//this is an assumption that my left and right wall depth is 5
    camera_left_x=-2.7, camera_right_x=2.7, camera_forward_z=-7.2
    //console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
    if(((myStartPosition_x<camera_right_x)&&(myStartPosition_x>camera_left_x)) && (myStartPosition_z<camera_forward_z)){
      var new_values = getValuesFromPathGen(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
      console.log(new_values)
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

/


// AFRAME.registerComponent('rotation-reader', {
//     tick: function() {

//         myStartPosition_x = this.el.object3D.position.x;
//         //y always constant which is 1.6
//         myStartPosition_z = this.el.object3D.position.z;
//         // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
//         //contains x,y,z
//         myStartBeta = this.el.object3D.rotation.y;
//         myLength = 2; //this is an assumption that my left and right wall depth is 5
//         camera_left_x = -2.7, camera_right_x = 2.7, camera_forward_z = -7.2;
//         //console.log(myStartPosition_x,myStartPosition_z,myStartBeta,myLength)
//         if (((myStartPosition_x < camera_right_x) && (myStartPosition_x > camera_left_x)) && (myStartPosition_z < camera_forward_z)) {
//             getValuesFromPathGen()
//         }
//     }
// });

// //this function is called recursively once it reaches end of room,
// //and it returns new values of x,z position and beta wrt y rotation
// //
// var flag = true;

// function getValuesFromPathGen() {

//     var beta, p1_x = 0;
//     // var p1_y = 2.5;
//     var p1_z = -10;
//     if (flag == true) {
//         beta = 2.35619; // 135 deg
//         flag = false;
//     } else {
//         beta = 3.92699; // 225 deg
//         flag = true;
//     }
//     var p2_x, p2_z, p2_beta;
//     var apiJson = {}
//     const req = new XMLHttpRequest();
//     req.responseType = 'json';
//     var myUrl = `http://pathgen.herokuapp.com/newpoint?x=${p1_x}&z=${p1_z}&beta=${beta}&length=6&gennewbeta=0`
//     req.open('GET', myUrl, true);
//     req.onload = () => {
//         apiJson = req.response;
//         p2_beta = apiJson.new_beta;
//         p2_x = apiJson.new_point[0];
//         p2_z = apiJson.new_point[1];
//         console.log(p2_x, p2_z, p2_beta);
//         room(p1_x, p1_z, p2_x, p2_z, beta, flag);
//     };
//     req.send();
// }



// // function newValueUsageFun(apiJson) {
// //     //console.log(apiJson)
// //     new_beta_point = apiJson.new_beta;
// //     new_x_point = apiJson.new_point[0];
// //     new_z_point = apiJson.new_point[1];
// //     console.log(new_x_point, new_z_point, new_beta_point)
// // }


// /* return code for function
// return {
//   new_x_point,
//   new_z_point,
//   new_beta_point

//         var i;
//   for (i = 0; i < 2; i++) {
//     myPosition_z = this.el.object3D.position.z
//     room()
//   } 
// };*/
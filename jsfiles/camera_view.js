

AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    //console.log(this.el.object3D.position.x);
    myPosition_x = this.el.object3D.position.x
    //y always constant which is 1.6
    myPosition_z = this.el.object3D.position.z
    //console.log(this.el.object3D.rotation);
    // `position` is a three.js Vector3. this.el is element and object3D in 3js get the position/rotation which 
    //contains x,y,z
    myBeta = this.el.object3D.rotation.y;
    myLength = 5;//this is an assumption that my left and right wall depth is 5
    //console.log(myPosition_x,myPosition_z,myBeta,myLength)
    //if(((myPosition_x<2.7)&&(myPosition_x>-2.7)) && (myPosition_z<-2.7))
    //getValuesFromPathGen(myPosition_x,myPosition_z,myBeta,myLength)
  }
});



function getValuesFromPathGen(myPosition_x,myPosition_z,myBeta,myLength){
  var apiJson={}
  const req = new XMLHttpRequest();
  req.responseType = 'json';
  var myUrl = `http://pathgen.herokuapp.com/newpoint?x=${myPosition_x}&z=${myPosition_z}&beta=${myBeta}&length=1.23&gennewbeta=1`
  //req.open('GET', 'http://pathgen.herokuapp.com/newpoint?x=0.2&z=1.3&beta=3.132&length=1.23&gennewbeta=1');
  req.open('GET', myUrl);
  req.onload = () => {
    apiJson = req.response;
    console.log(apiJson);
  };
  req.send();
  console.log(apiJson);
}


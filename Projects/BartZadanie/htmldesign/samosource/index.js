/*document.onload = function() {
  document.getElementsByClassName("pozadie");
};*/

let n = 5

window.onload = function(){

  console.log("slovo");

  //let docFoto = document.getElementsByClassName("foto");
  
  let element = document.getElementsByClassName("foto");

  for(let i = 0; i < n;i++){
    document.getElementById(i).addEventListener("mousemove", function(event){



  




      let tempSrc = document.getElementById(i).src;

      document.getElementById('pozadieID1').src = tempSrc;



      



      
  });

  }//end of for


}//end of onload()
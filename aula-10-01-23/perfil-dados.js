
const home = document.getElementById("home");

document.addEventListener("keyup", (e)=>{
    console.log(e.code);
    if(e.code == "Backspace" ){
       home.click();
    };
  })
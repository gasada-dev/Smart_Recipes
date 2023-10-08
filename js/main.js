const BADFOODSWITCH = document.querySelector("#ImgBadFoodSwitch");

let i = 0;

BADFOODSWITCH.addEventListener( 'click', () =>{
  if (i === 0){
 BADFOODSWITCH.src = "./src/img/off.png";
    i++
  } else {
    BADFOODSWITCH.src = "./src/img/on.png";
    i--
}})
  


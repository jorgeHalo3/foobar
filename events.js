const button = document.querySelectorAll("button");
const body = document .querySelector("body");
const main =document.querySelector("main");
for (let i = 0; i< button.length; i++){
    button[i].addEventListener("click",function(event) {
    main.textContent= [event.target.value]
})}
   

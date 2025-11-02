//import css file
import "./styles.css";
import {homePage} from "./homePage.js";
import {menu} from "./menu.js";
import {about} from "./about.js"

console.log("restaurant landing page!");
// console.log(fishImage);

//target each button in nav and add event listener to call the relevant function
const menuButton=document.querySelector("#menu");
const homeButton=document.querySelector("#home");
const aboutButton=document.querySelector("#about");

menuButton.addEventListener("click",()=>{
    menu();
})

homeButton.addEventListener("click",()=>{
    homePage();
})

aboutButton.addEventListener("click",()=>{
    about();
})



// console.log(number);  
// console.log(randomFunction());                                
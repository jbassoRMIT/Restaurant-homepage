//write function to remove child elements
const removeChildren=function(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild)
    }
}

import salad from "./fishbowlSalad.jpeg";

//Function to render the about page
const about=function(){
    //target content div
    const contentDiv=document.querySelector("#content");

    //clear contents of div
    removeChildren(contentDiv);

    const heading=document.createElement("h3");
    heading.textContent="About";
    const pic=document.createElement("img");
    pic.src=salad;
    const text=document.createElement("p");
    text.textContent="For as long as we can remember, we wanted to share our product and brand with the world, not just Australia. What better place to start than the most competitive retail landscape in the world, New York City! Crazy? To us, the idea of not doing it was even crazier.With everything we've learnt since founding FISHBOWL back in 2016, we were confident that we had the experience, knowledge, and skillsets to execute our first NYC store. So, we secured our first location at 65 Bleecker, NoHo, and got to work.DAY ONE, April 20, 2024 - we will never forget."


    //append elements to content div
    contentDiv.appendChild(heading);
    contentDiv.appendChild(pic);
    contentDiv.appendChild(text);


}

//export the function
export {about};
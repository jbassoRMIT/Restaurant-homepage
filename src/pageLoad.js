//function to create a title, image and description of the restaurant

import fishImage from "./fishbowl.jpeg";
// const fishImageUrl=fishImage;

const pageLoad=function(){
    //target div with id=content
    const contentDiv=document.querySelector("#content");
    

    // //create h2,img and p elements
    const restName=document.createElement("h2");
    const restImage=document.createElement("img");
    const restInfo=document.createElement("p");

    // //change textContent of each elements
    restName.textContent="Fishbowl";
    restInfo.textContent="Why I love working at fishbowl..."
    restImage.src=fishImage;

    // //append each item to contentDiv
    contentDiv.appendChild(restName);
    contentDiv.appendChild(restImage);
    contentDiv.appendChild(restInfo);
}

//export the function
export {pageLoad};
import { removeChildren } from "./helperFunctions.js";

//function to render the menu
const menu=function(){
    //target content div
    const contentDiv=document.querySelector("#content");

    //clear contents of div
    removeChildren(contentDiv);

    //Create an array of menu items
    const menuItems=[
        {
            item:"Gnocchi",
            price:32
        },
        {
            item:"Beef ragu",
            price:35
        },
        {
            item:"Nasu Dengaku",
            price:20
        }
    ]

    //create a table, with headers anf fill in the menu
    const table=document.createElement("table");
    table.classList.add("menuTable");
    const headers=document.createElement("tr");
    const nameHeader=document.createElement("th");
    nameHeader.textContent="Name"
    const priceHeader=document.createElement("th");
    priceHeader.textContent="Price";

    

    //append to content div
    contentDiv.appendChild(table);
    table.appendChild(headers);
    headers.appendChild(nameHeader);
    headers.appendChild(priceHeader);

    //Loop over menuItems, create a table row and append to table
    for(let item of menuItems){
        const row=document.createElement("tr");
        const itemName=document.createElement("td");
        itemName.textContent=item.item;
        const itemPrice=document.createElement("td");
        itemPrice.textContent=`$${item.price}`;
        row.appendChild(itemName);
        row.appendChild(itemPrice);
        table.appendChild(row);
        
    }

}

export {menu};
//write function to remove child elements
const removeChildren=function(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild)
    }
}

export {removeChildren};
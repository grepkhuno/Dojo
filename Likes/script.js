function changeInnerTextTo(element){
    if(element.innerText=="Logout"){
           element.innerText="Login" ;
    }else{
        element.innerText="Logout" ;
    }}
    var counterVal = 0;
    function likeCounter(element){
       element.innerText=++counterVal;
       alert("Ninja was Liked")

    }
function removeBtn (element){
    element.remove();
}

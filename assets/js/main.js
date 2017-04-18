$(document).ready(function(){
$( ".button" ).click(function() {
var inputID = this.id;
//isolate the selected button based on the scope of the this object
var input =  document.getElementById(inputID).textContent;
//return the string of the selected button
var numb =  parseInt(input);
document.getElementById("result").innerHTML = input;
switch (input){

    case input==="AC" :
    document.getElementById("result").innerHTML = 0;
    break;

    case input==="CE" :
    break;

    case input==="/" :
    break;

    case input==="x" :
    break;

    case input==="-" :
    break;

    case input==="+" :
    break;

    case input==="=" :
    break;

    case input==="." :
    break;

    break;

    default:

    break;
} //end switch

});
})

//retrieve and store the input value in the variable name
let name = document.getElementById("name");

//trigger this function when user click the button
function printName(){
    //print out Hello concatanate with the user input
    console.log("Hello " + name.value);
}
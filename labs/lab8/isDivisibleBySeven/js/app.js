//variable to store user input
let userInput = document.getElementById("userInput");

//variable to store the output 
let message = document.getElementById("showMessage");

//function to trigger when user clicks the check button
function check() {

    //variable to store the boolean result of the function divisible
    let test = divisible();

    //if test is true print user input is divisible by 7
    //else print out user input is not divisible by 7
    if(test){
        message.innerHTML = `${userInput.value} is divisible by 7`;
    }else {
        message.innerHTML = `${userInput.value} is not divisible by 7`
    }
}

function divisible(){
    if(Number(userInput.value) % 7 == 0){
        return true;
    }else {
        return false;
    }
}
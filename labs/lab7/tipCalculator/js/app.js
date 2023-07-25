//store the value of the input the variable tip
let tip = document.getElementById("tip");
let amount = 40.98;

//trigger this function when user clicks the button
function calculate(){

    //type cast the user input to numerical value ot
    //store the computation in the variable total
    let total = Number(tip.value) + amount;

    //output
    console.log(`Tip: $${tip.value}. Total: $${total}`);
}
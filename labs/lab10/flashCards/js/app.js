//store the object first button in the variable element
let element = document.getElementById("button1");

//add event listener to the first button
element.addEventListener("click", itsClicked);

//trigger this function on click
function itsClicked(event){
    //store the value of the attribute of the clicked element 
    let answer = event.target.getAttribute("data-answer");

    //create object to receive the answer
    let result = document.getElementById("result");

    //display the answer in the div
    result.innerHTML = answer;
}
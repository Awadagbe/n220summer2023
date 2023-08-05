//store the id attribute of the square div in element
let element = document.getElementById("eventTrigger");

//create the addEventListener function
element.addEventListener("click", itsClicked);

//function to trigger at click
function itsClicked(event){
    //store the attribute data-response value in the variable response
    let response = event.target.getAttribute("data-response");

    //assigned the appropriate color to each div
    event.target.style.backgroundColor = response;
}
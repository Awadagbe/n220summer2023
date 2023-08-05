//store the clicked object into variable element
let element = document.getElementById("red1");

//add event listener to the element
element.addEventListener("click", itsClicked);

//trigger this function on click
function itsClicked(event){

    //store the value of the attribute data-response
    let response = event.target.getAttribute("data-response");

    //store the content of the divs
    let rcolor = document.getElementById("rcolor");
    let gcolor = document.getElementById("gcolor");
    let bcolor = document.getElementById("bcolor");

    //cast the content of the divs to numerical value
    let red = Number(rcolor.textContent);
    let green = Number(gcolor.textContent);
    let blue = Number(bcolor.textContent);
    
    //test the value data-response
    if(response == "red1"){
        //add up
        red = red + 1;
        //refresh the content of the div
        rcolor.innerHTML = red;
    }

    //test the value data-response
    if(response == "red5"){
        //add up
        red = red + 5;
        //refresh the content of the div
        rcolor.innerHTML = red;
    }

    //test the value data-response
    if(response == "red10"){
        //add up
        red = red + 10;
        //refresh the content of the div
        rcolor.innerHTML = red;
    }

     //test the value data-response
    if(response == "green1"){
        //add up
        green = green + 1;
        //refresh the content of the div
        gcolor.innerHTML = green;
    }

     //test the value data-response
    if(response == "green5"){
         //add up
        green = green + 5;
        //refresh the content of the div
        gcolor.innerHTML = green;
    }

    //test the value data-response
    if(response == "green10"){
        //add up
        green = green + 10;
        //refresh the content of the div
        gcolor.innerHTML = green;
    }

    //test the value data-response
    if(response == "blue1"){
        //add up
        blue = blue + 1;
        //refresh the content of the div
        bcolor.innerHTML = blue;
    }

    //test the value data-response
    if(response == "blue5"){
        //add up
        blue = blue + 5;
        //refresh the content of the div
        bcolor.innerHTML = blue;
    }

    //test the value data-response
    if(response == "blue10"){
        //add up
        blue = blue + 10;
        //refresh the content of the div
        bcolor.innerHTML = blue;
    }
   
    //the div to show color is stored here
    let divmixer = document.getElementById("divmixer");
    //update the color on click
    divmixer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
}
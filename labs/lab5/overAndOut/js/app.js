
    //create element div
    let el = document.getElementById("overandout");

    //set the height and the width
    el.style.height = "100px";
    el.style.width = "100px";
    
    //set the rgb color 
    let red = 5;
    let green = 5;
    let blue = 250;

    //set the background color to blue
    el.style.backgroundColor = "rgb(" + `${red}` + "," + `${green}` + "," + `${blue}` +")";

    //append the element div
    document.body.appendChild(el);

    //when the mouse is over change color to black
    function over(){
        el.style.backgroundColor = "rgb(5,5,5)";
    }

    //when the mouse is out change the div to blue;
    function out(){
        el.style.backgroundColor = "rgb(" + `${red}` + "," + `${green}` + "," + `${blue}` +")";
    }
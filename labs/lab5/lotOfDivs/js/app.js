
//create a loop that iterates 100 times
for(var i=0; i<100; i++){
    //create element div
    let el = document.createElement("div");

    //set the height and the width
    el.style.height = "20px";
    el.style.width = "20px";
    
    //set the rgb color randomly
    //the numbers red, green and blue will always be between 0 and 255
    let red = Math.random()*256;
    let green = Math.random()*256;
    let blue = Math.random()*256;

    //set the background color using the rgb random numbers
    el.style.backgroundColor = "rgb(" + `${red}` + "," + `${green}` + "," + `${blue}` +")";

    //shift let at each iteration
    el.style.float = "left";

    //append the element div
    document.body.appendChild(el);
}
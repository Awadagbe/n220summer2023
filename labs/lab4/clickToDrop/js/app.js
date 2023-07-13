// declaration of x and y position
let xPos;
let yPos;

//initialization of i
let i = 0;

//initialization of yArray of array type
let yArray =  [];

function setup(){
    //create canvas of height=800px and width=500px
    createCanvas(800, 500);

}

function draw(){
    //set the background color to grey
    background(200);

    //draw the first brick
    rect(xPos, yPos, 100, 65);

    //fill the array with y position
    yArray[i]= yPos;

    //increment y position by 5px by frame
    yPos = yPos + 5;

    //draw the second brick
    rect(xPos + 200, yArray[i], 100, 65);
  
    //increment i
    i++;
}

//retrieve mouse coordonates at mouse click
function mousePressed(){
    xPos = mouseX;
    yPos = mouseY;

}
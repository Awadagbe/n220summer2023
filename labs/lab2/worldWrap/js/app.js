//initialize the x position of the center of the ball to zero.
let xPos = 0;


//initialize the y position of the center of the ball to the middle of the frame
let yPos = 300;

function setup(){
    //set the frame dimensions as needed by the project
    createCanvas(800, 600);
}

function draw(){
    // set the background color
    background(50, 100, 250);

    // fill the cercle 
    fill(235, 64,52);

    //increment the position of the ball by 5px
    xPos = xPos + 5;

    //if the ball reach the end return it back to the beginning
    if(xPos == 800){
        xPos = 0;
    }

    //make the circle
    circle(xPos, yPos, 100);
}
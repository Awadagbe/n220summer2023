/*
Drawing a STOP sign
*/

let circleX = 400;
let circleY = 250;

let xText = 330;
let yText = 270;

function setup(){
    createCanvas(800, 500);
}

function draw(){
    background(200);

    fill(81, 7, 16);
    stroke(255,255,255);
    strokeWeight(10);
    circle(circleX, circleY, 300);
   
    fill(255,255,255);
    textStyle(BOLD);
    textSize(50);
    text('STOP', xText, yText)
}
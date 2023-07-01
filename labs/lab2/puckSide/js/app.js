function setup(){
    //set the dimensions of the frame
    createCanvas(400, 300);
}

function draw(){
    //set the background color
    background(200);

    //when the mouse is on the right half of the canvas, draw the circle in red. When the mouse is on the left side of the canvas, draw the circle in blue.
    if(mouseX>200){
        fill(235, 64,52);
    }else{
        fill(50, 100, 250);
    }

    //draw the circle
    circle(mouseX, mouseY, 50);
}
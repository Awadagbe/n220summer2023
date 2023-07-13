//initialize the arrays of colors of string tyoe
let colors = ["orange", 'blue', "green"];

xPos = 150;
yPos = 70;

function setup(){
    //create canvas of 800 pixels large and 500 pixels of width
    createCanvas(800, 500);

    //set the background color to grey
    background(200);

    //iterate through the array of colors
    for(var i=0; i<colors.length; i++){
        
        //each rectangle with the array color from left to right
        fill(colors[i]);

        //need to check for i==0, if i==0 don't change the initialized y position otherwise multiply 60 by the iterand plus one
        if(i!=0){
            yPos = 60*(i+1);
        }

        //draw each rectangle
        rect(xPos, yPos, 200, 60);
    }
}
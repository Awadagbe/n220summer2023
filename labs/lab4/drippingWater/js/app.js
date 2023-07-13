//initialized i that will count frames
let i=0;

//x position for the circles, it will not change
xPos = 400;

//initilialized y position for the first circle
y=250;

//create array of 50 elements, 250/5px = 50
let yPos = [50];

function setup(){
    //create canvas of 800px large and 500px width
    createCanvas(800, 500);

    //fill the array of y positions with the y values, y value is incremented by 5 every time
    for(var j=0; j<50; j++){
        yPos[j]=y;
        y=y+5;
    }
}

function draw(){
    //set the background color to grey
    background(200);

    //at each ten frames draw a circle of 50px of radius and move y value down by 5px
    if(i%10==0){
        circle(xPos, yPos[i], 50);
    }

    //increment i value
    i++;
}
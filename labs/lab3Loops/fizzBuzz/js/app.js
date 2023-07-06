
function setup(){
    //create the frame by setting the dimension
    createCanvas(800, 500);

    background(50, 100, 250);

    for(var i = 1; i<=25; i++){
        //fill with black
        fill(0, 0, 0);

        //if the iterand is divisible by 3, draw a purple circle instead 
        if(i%3 == 0){
            fill(160,32,240);
        }

        //if the iterand is divisible by 5, draw a green square instead 
        if(i%5 == 0){
            fill(5,200,5);
        }

        //if the iterand is divisible by 3 AND 5, draw a blue square instead 
        if(i%3 == 0 && i%5 == 0){
            fill(5,5,200);
        }
        circle(i*30, 250, 20);
    }
}

function draw(){
    //set the background color
    
}
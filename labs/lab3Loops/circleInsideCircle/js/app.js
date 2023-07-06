function setup(){
    createCanvas(500, 500);

    background(200);

    
    for(var i = 500; i>0; i=i-10){
        circle(250, 250, i);
    }
}
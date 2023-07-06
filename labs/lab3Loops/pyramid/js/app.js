function setup(){
    //create canvas of width=800px and heigh=500px
    createCanvas(800, 500);

    //give blue background color to the canvas
    background(50, 100, 250);

    //Each square of the pyramid has 50px as side 
    //the pyramid represents a two dimensions arrays
    //[[(50,50)] [(50,100) (100,100)] [(50,150) (100,150) (150,150)] [(50,200) (100,200) (150,200) (200,200)]]
    for(var i=1; i<=4; i++){
        for(var j=1; j<=i; j++){
            fill(200, 5, 5);
            rect(j*50, i*50, 50, 50);
        }
         
    }
    
}
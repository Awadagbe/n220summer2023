let obj = {
    width: 300,
    height: 200,
    color: [12, 45, 201],
    position: {x: 50, y: 50}
}


function setup(){
    createCanvas(800, 500);
}

function draw(){
    background(100);

    fill(obj.color);

    rect(obj.position.x, obj.position.y, obj.width, obj.height);
}
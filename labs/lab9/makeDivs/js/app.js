function func(){
    let objects = [

        { color: "#FF0000", height: 100, width: 300 },
    
        { color: "#FFFF00", height: 200, width: 200 },
    
        { color: "#ff0000", height: 300, width: 100 },
    
    ];

    
    // element.style.backgroundColor = "#006534";
    // document.body.appendChild(element);

   for(var i=0; i<objects.length; i++){
    let element = document.createElement("div");
        element.style.color = objects[i].color;
        element.style.height = objects[i].height;
        element.style.width = objects[i].width;
        element.innerHTML = "Media Application";
        document.body.appendChild(element);
   }
}
func();

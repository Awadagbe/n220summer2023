//function that restyle an HTML element
//the HTML element is passed as parameter
function changeStyles(htmlEl){
    htmlEl.style.backgroundColor = "#89CFF0";
    htmlEl.style.width= "200px";
    htmlEl.style.height = "150px";
}

//function to trigger on click
function change1(){
    let div1 = document.getElementById("div1");
    //called to the above function and argument passed
    changeStyles(div1);
}

//function to trigger on click
function change2(){
    let div2 = document.getElementById("div2");
    //called to the above function and argument passed
    changeStyles(div2);
}

//function to trigger on click
function change3(){
    let div3 = document.getElementById("div3");
    //called to the above function and argument passed
    changeStyles(div3);
}
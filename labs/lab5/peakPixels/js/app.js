let el = document.getElementById("peakpixels");

el.style.height = "100px";
el.style.width = "100px";
el.style.backgroundColor = "#355E3B";

let h = 100;
let w = 100;

function peakPixels(){
    h = h * 1.1 ;
    w = w * 1.1 ;
    el.style.height = h + "px";
    el.style.width = w + "px";
}

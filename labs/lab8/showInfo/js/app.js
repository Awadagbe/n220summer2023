//array of three strings
let arr =["home", "about", "art"];

//trigger this function on click
function show(n){

    //variable for the div
    let show = document.getElementById("show");

    //if n equal zero the element of array with index zero
    if(n==0){
        //print the element at index n of the array into the div
        show.innerHTML = arr[n];
    }

    //if n equal one the element of array with index one
    if(n==1){
        //print the element at index n of the array into the div
        show.innerHTML = arr[n];
    }

    //if n equal two the element of array with index two
    if(n==2){
        //print the element at index n of the array into the div
        show.innerHTML = arr[n];
    }

    //style the div
   show.style.backgroundColor="#89CFF0";
   show.style.width = "200px";
   show.style.height = "75px";
   
}

//function to trigger onclick
function calculate(text){
    //store the object that will output
    let divSum = document.getElementById("divSum");
    let divAverage = document.getElementById("divAverage");

    //empty the divs that will outpu
    divSum.innerHTML = "";
    divAverage.innerHTML = "";

    //if parameter equals dontclear
    if(text=="dontclear"){
        //store the object input into the variable userInput
        let userInput = document.getElementById("userInput");

        //store the value typed in the variable stringValues
        let stringValues = userInput.value;

        //store the values from splitting in the array
        let myArray = stringValues.split(",");

        //initialized the sum 
        let sum = 0;

        //iterate through the array
        for(var i=0; i<myArray.length; i++){
            //add up each value from the array to sum
            sum = sum + Number(myArray[i]);
        }

        //store the average value 
        let average = sum/myArray.length;

        //store values in the created elements
        divSum.innerHTML = `The sum is: ${sum}`;
        divAverage.innerHTML = `The average is: ${average}`;

    }

    //if the argument equals clear
    if(text=="clear"){
        //empty the user input
        userInput.value = "";

        //empty divs
        divSum.innerHTML = "";
        divAverage.innerHTML = "";
    }
}



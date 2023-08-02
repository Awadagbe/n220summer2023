

//function to trigger onclick
function catcher(text){

    let divmessage1 = document.getElementById("message1");
    let divmessage2 = document.getElementById("message2");
    
    divmessage1.innerHTML = "";
    divmessage2.innerHTML = "";
    
        //if parameter equals dontclear
        if(text=="dontclear"){
            //store the object input into the variable userInput
            let userInput = document.getElementById("userInput");
    
            //store the value typed in the variable stringValues
            let stringValues = userInput.value;
    
            //store the values from splitting in the array
            let myArray = stringValues.split(" ");

            let result = myArray.filter(check())
    
            //initialized the counter
            let counter = 0;
    
            //iterate through the array
            for(var i=0; i<myArray.length; i++){
                if(myArray[i] == "clear" || myArray[i] == "water" || myArray[i] == "tires"){
                    counter++
                }  
            }
    
            let divmessage1 = document.getElementById("message1");
            let divmessage2 = document.getElementById("message2");
            
            if(counter > 0){
                divmessage1.innerHTML = `Bad word found`;
                divmessage2.innerHTML = `${counter} bad word(s) found`;
            }else{
                divmessage1.innerHTML = `Bad word not found`;
                divmessage2.innerHTML = `0 bad word found`;
            }
            
        }
    
        //if the argument equals clear
        if(text=="clear"){
            //empty the user input
            userInput.value = "";
    
            //empty divs
            divmessage1.innerHTML = "";
            divmessage2.innerHTML = "";
        }
    }

    function check(word){
        if(word=="clear" || word=="water" || word=="tires"){
            return true;
        }
    }
    
    
    
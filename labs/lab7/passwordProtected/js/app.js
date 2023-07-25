//store the object username in the variable username
let username = document.getElementById("userName");

//store the object password in the variable password
let password = document.getElementById("password");

//trigger this function when user clicks the button
function check(){
    //store the object div in the variable output
    let output = document.getElementById("showMessage");

    //initialized the div 
    output.innerHTML = "Wrong information";

    //if success update the div
    if(username.value == "Username" && password.value == "Password"){
        output.innerHTML = "Success";
    }
}
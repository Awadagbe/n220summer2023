// Function to trigger whenever user clicks on any box
function func() {
  
    //variables created to store the objects buttons
    var b1 = document.getElementById("button1").value;
    var b2 = document.getElementById("button2").value;
    var b3 = document.getElementById("button3").value;
    var b4 = document.getElementById("button4").value;
    var b5 = document.getElementById("button5").value;
    var b6 = document.getElementById("button6").value;
    var b7 = document.getElementById("button7").value;
    var b8 = document.getElementById("button8").value;
    var b9 = document.getElementById("button9").value;
  
    //variables created to store the objects buttons
    //these one will set the actions happening after the condition in the if
    var b1btn = document.getElementById("button1");
    var b2btn = document.getElementById("button2");
    var b3btn = document.getElementById("button3");
    var b4btn = document.getElementById("button4");
    var b5btn = document.getElementById("button5");
    var b6btn = document.getElementById("button6");
    var b7btn = document.getElementById("button7");
    var b8btn = document.getElementById("button8");
    var b9btn = document.getElementById("button9");
  
    // Checking if Player A won or not and after
    // that disabled all the other fields
    if ((b1 == 'A') && (b2 == 'A') && (b3 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b1btn.style.color = "green";
        b2btn.style.color = "green";
        b3btn.style.color = "green";
    }
    else if ((b1 == 'A') && (b4 == 'A') && (b7 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b1btn.style.color = "green";
        b4btn.style.color = "green";
        b7btn.style.color = "green";
    }
    else if ((b7 == 'A') && (b8 == 'A') && (b9 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
  
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
  
        b7btn.style.color = "green";
        b8btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b3 == 'A') && (b6 == 'A') && (b9 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
  
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
  
        b3btn.style.color = "green";
        b6btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b1 == 'A') && (b5 == 'A') && (b9 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
  
        b1btn.style.color = "green";
        b5btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b3 == 'A') && (b5 == 'A') && (b7 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b3btn.style.color = "green";
        b5btn.style.color = "green";
        b7btn.style.color = "green";
    }
    else if ((b2 == 'A') && (b5 == 'A') && (b8 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
  
        b2btn.style.color = "green";
        b5btn.style.color = "green";
        b8btn.style.color = "green";
    }
    else if ((b4 == 'A') && (b5 == 'A') && (b6 == 'A')) {
        document.getElementById('message')
            .innerHTML = "Player A won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b4btn.style.color = "green";
        b5btn.style.color = "green";
        b6btn.style.color = "green";
    }
  
    // Checking of Player A finish
    // Checking for Player B starts, Is player B won or
    // not and after that disabled all the other fields
    else if ((b1 == 'B') && (b2 == 'B') && (b3 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b1btn.style.color = "green";
        b2btn.style.color = "green";
        b3btn.style.color = "green";
    }
    else if ((b1 == 'B') && (b4 == 'B') && (b7 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b1btn.style.color = "green";
        b4btn.style.color = "green";
        b7btn.style.color = "green";
    }
    else if ((b7 == 'B') && (b8 == 'B') && (b9 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
  
        b7btn.style.color = "green";
        b8btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b3 == 'B') && (b6 == 'B') && (b9 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "green";
        b6btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b1 == 'B') && (b5 == 'B') && (b9 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
  
        b1btn.style.color = "green";
        b5btn.style.color = "green";
        b9btn.style.color = "green";
    }
    else if ((b3 == 'B') && (b5 == 'B') && (b7 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b3btn.style.color = "green";
        b5btn.style.color = "green";
        b7btn.style.color = "green";
    }
    else if ((b2 == 'B') && (b5 == 'B') && (b8 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
  
        b2btn.style.color = "green";
        b5btn.style.color = "green";
        b8btn.style.color = "green";
    }
    else if ((b4 == 'B') && (b5 == 'B') && (b6 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Player B won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
  
        b4btn.style.color = "green";
        b5btn.style.color = "green";
        b6btn.style.color = "green";
    }
  
    // Checking of Player B finish
    // Here, Checking about Tie
    else if ((b1 == 'A' || b1 == 'B') && (b2 == 'A'
        || b2 == 'B') && (b3 == 'A' || b3 == 'B') &&
        (b4 == 'A' || b4 == 'B') && (b5 == 'A' ||
            b5 == 'B') && (b6 == 'A' || b6 == 'B') &&
        (b7 == 'A' || b7 == 'B') && (b8 == 'A' ||
            b8 == 'B') && (b9 == 'A' || b9 == 'B')) {
        document.getElementById('message')
            .innerHTML = "Noone won!";
    }
    else {
  
        //according to the value of the global variable give the turn
        if (option == 1) {
            document.getElementById('message')
                .innerHTML = "Player A Turn";
        }
        else {
            document.getElementById('message')
                .innerHTML = "Player B Turn";
        }
    }
}
  
//the reset function
//this function reloads the web page and sets the inputs values to empty
function func2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}
  
//initialized the global variable 
option = 1;

//function related to the first input
function func3() {
    if (option == 1) {
        document.getElementById("button1").value = "A";
        document.getElementById("button1").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button1").value = "B";
        document.getElementById("button1").disabled = true;
        option = 1;
    }
}
  
//function related to the second input
function func4() {
    if (option == 1) {
        document.getElementById("button2").value = "A";
        document.getElementById("button2").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button2").value = "B";
        document.getElementById("button2").disabled = true;
        option = 1;
    }
}
  
//function related to the third input
function func5() {
    if (option == 1) {
        document.getElementById("button3").value = "A";
        document.getElementById("button3").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button3").value = "B";
        document.getElementById("button3").disabled = true;
        option = 1;
    }
}
  
//function related to the fourth input
function func6() {
    if (option == 1) {
        document.getElementById("button4").value = "A";
        document.getElementById("button4").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button4").value = "B";
        document.getElementById("button4").disabled = true;
        option = 1;
    }
}
  
//function related to the fifth input
function func7() {
    if (option == 1) {
        document.getElementById("button5").value = "A";
        document.getElementById("button5").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button5").value = "B";
        document.getElementById("button5").disabled = true;
        option = 1;
    }
}
  
//function related to the sixth input
function func8() {
    if (option == 1) {
        document.getElementById("button6").value = "A";
        document.getElementById("button6").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button6").value = "B";
        document.getElementById("button6").disabled = true;
        option = 1;
    }
}
  
//function related to the seventh input
function func9() {
    if (option == 1) {
        document.getElementById("button7").value = "A";
        document.getElementById("button7").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button7").value = "B";
        document.getElementById("button7").disabled = true;
        option = 1;
    }
}
  
//function related to the eight input
function func10() {
    if (option == 1) {
        document.getElementById("button8").value = "A";
        document.getElementById("button8").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button8").value = "B";
        document.getElementById("button8").disabled = true;
        option = 1;
    }
}
  
//function related to the nine input
function func11() {
    if (option == 1) {
        document.getElementById("button9").value = "A";
        document.getElementById("button9").disabled = true;
        option = 0;
    }
    else {
        document.getElementById("button9").value = "B";
        document.getElementById("button9").disabled = true;
        option = 1;
    }
}
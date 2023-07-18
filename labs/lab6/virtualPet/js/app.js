class Pets{
    name = "";
    energy = 0; 
    hapiness = 0;
    age = 1;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    feed(){
        this.energy = this.energy + 5;
    }

    playWith(){
        this.hapiness = this.hapiness + 5; 
    }
}

let el = document.getElementById("tamagotchi");
el.style.height = "200px";
el.style.width = "200px";
el.style.backgroundColor =  "#FFF200";

let myPet = new Pets("Cat", 1.5);

function feed(){
    myPet.feed();
    el.innerHTML = `<p>Pet: ${myPet.name} </p> <p>Energy: ${myPet.energy} </p> <p>hapiness: ${myPet.hapiness} </p> <p>Age: ${myPet.age} </p>`;
    //myPet.update();
}

function playWithPet(){
    myPet.playWith();
    el.innerHTML = `<p>Pet: ${myPet.name} </p> <p>Energy: ${myPet.energy} </p> <p>hapiness: ${myPet.hapiness} </p> <p>Age: ${myPet.age} </p>`;
    //myPet.update();
}
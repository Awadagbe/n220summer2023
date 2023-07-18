let books = [
    {
        id: 1,
        title: "Live Life Happily..!!",
        author: "Aman",
        pages: 10,
    },

    {
        id: 2,
        title: "Getting started with p5.js",
        author: "Shyam",
        pages: 250,
    },

    {
        id: 3,
        title: "Earn Respect..!!",
        author: "Shyam",
        pages: 17,
    },

    {
        id: 4,
        title: "Be Energetic Always..!!",
        author: "Ram",
        pages: 21,
    },

    
];

let librairy = document.getElementById("librairy");

function showBooks(){
    for(var i=0; i<books.length; i++){

        let newEl = document.createElement("div");
        
        newEl.style.width="100px";

        if(books[i].copies > 20){
            newEl.style.backgroundColor="#FFF200";
        }

        newEl.innerHTML = "<div>" + books[i].id + " </div><div > " + books[i].title + " </div><div > " + books[i].author + " </div><div> " + books[i].pages + " </div> <p>";
        newEl.classList.add("books");
        librairy.appendChild(newEl);

    }
}

function hideBooks(){
    librairy.innerHTML = "";
}
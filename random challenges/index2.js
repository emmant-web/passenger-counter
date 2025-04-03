let welcomeEl = document.getElementById("welcome-el");


let name = "lan";
let greeting = "hello! ";


let message = greeting + name;



welcomeEl.innerText = message;



// let text = welcomeEl.innerText;

// console.log(text);

message = message + "👋";

// shorter version
// message += "👋";


welcomeEl.innerText = message;




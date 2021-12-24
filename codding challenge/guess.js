//add an array list
const guessList = ["James", "Nori", "Peter", "Trezer",]
const userInput = prompt("What is your name ?");

if(guessList.includes(userInput)) {
    alert(`Welcome to Jammie , ${userInput}`);
}else{
    alert("You don't seem to be our guest.");
}
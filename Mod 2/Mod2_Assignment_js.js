// Ask the user for their first name and store it in Fname
let Fname = prompt("What is your first name?");

// Display a welcome message using the name they entered
alert("Welcome, " + Fname + "!");

// Create a constant to store Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user for their favorite number and store it in myFavNum
let myFavNum = prompt("What is your favorite number?");

// Convert the input from a string to a number
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the user's favorite number as the radius
// Formula: A = π * r^2
let myArea = piValue * (myFavNum ** 2);

// Display all variables on the webpage
document.write(
    "Hello " + Fname + ", you entered " + myFavNum + " as your favorite number.<br>" +
    "If your favorite number was the radius of a circle, the area of that circle would be " + myArea + "."
);
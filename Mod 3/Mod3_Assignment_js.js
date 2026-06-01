// ------------------------------
// 1. FOR LOOP: Count 0–10 and show odd/even
// ------------------------------
for (let count = 0; count <= 10; count++) {
    if (count % 2 === 0) {
        document.write("Count " + count + " is even<br>");
    } else {
        document.write("Count " + count + " is odd<br>");
    }
}

document.write("<br>"); // spacing


// ------------------------------
// 2. DO WHILE LOOP: Ask user for number 5–20
// ------------------------------
let myNum = prompt("Enter a number between 5 and 20:");
myNum = Number(myNum);

let counter = 1;

do {
    document.write("Counter: " + counter + "<br>");
    counter++;
} while (counter <= myNum);

document.write("<br>");


// ------------------------------
// 3. ARRAY OF SUBJECTS
// ------------------------------
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];


// 3a. Display using forEach()
subjects.forEach(function(item) {
    document.write(item + "<br>");
});

document.write("<br>");


// 3b. Display values separated by commas (one statement)
document.write(subjects.join(", "));
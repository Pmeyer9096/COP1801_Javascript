// ---------------------------------------------------------
// PART 1: Constructor Function (Updated for Module 6)
// ---------------------------------------------------------

function Dog(name, species, gender, origin, personality, mySound, canTalk, img) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.origin = origin;
    this.personality = personality;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.img = img;

    this.myGreeting = function () {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";

        return `
            <h3>${this.name}</h3>
            <p>
                Hello! My name is ${this.name}.<br>
                I am a ${this.species} from ${this.origin}.<br>
                My personality is: ${this.personality}.<br>
                What do I sound like? "${this.mySound}"<br>
                ${talkMessage}<br>
                <img src="${this.img}" alt="${this.name}" style="width:200px; margin-top:10px;">
            </p>
        `;
    };
}

// ---------------------------------------------------------
// PART 2: Create Multiple Dog Objects (LOCAL IMAGES)
// ---------------------------------------------------------

let dog1 = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Male",
    "Scooby-Doo, Where Are You!",
    "Goofy, friendly, easily scared",
    "Ruh-roh!",
    true,
    "scooby.png"
);

let dog2 = new Dog(
    "Brian Griffin",
    "White Labrador",
    "Male",
    "Family Guy",
    "Sarcastic, intelligent, calm",
    "I'm more of a talker than a barker.",
    true,
    "brian.png"
);

let dog3 = new Dog(
    "Courage",
    "Pink Beagle",
    "Male",
    "Courage the Cowardly Dog",
    "Nervous, loyal, brave when needed",
    "Aaaaaahhh!",
    true,
    "courage.png"
);

let dogList = [dog1, dog2, dog3];

// ---------------------------------------------------------
// PART 3: Display All Dog Properties Using for...in Loop
// ---------------------------------------------------------

let outputAll = "<h3>All Dogs and Their Properties</h3>";

for (let dog of dogList) {
    outputAll += `<strong>${dog.name}</strong><br>`;
    for (let prop in dog) {
        if (prop !== "myGreeting") {
            outputAll += `${prop}: ${dog[prop]}<br>`;
        }
    }
    outputAll += "<br>";
}

document.getElementById("output1").innerHTML = outputAll;

// ---------------------------------------------------------
// PART 4: Prompt User to Select a Dog
// ---------------------------------------------------------

let userChoice = prompt("Choose a dog: Scooby-Doo, Brian Griffin, or Courage");

if (userChoice) {
    userChoice = userChoice.trim().toLowerCase();
}

let selectedDog = null;

for (let dog of dogList) {
    if (dog.name.toLowerCase() === userChoice) {
        selectedDog = dog;
        break;
    }
}

// ---------------------------------------------------------
// PART 5: Display Selected Dog or Error Message
// ---------------------------------------------------------

if (selectedDog) {
    document.getElementById("output2").innerHTML = `
        <h2>Selected Dog</h2>
        ${selectedDog.myGreeting()}
    `;
} else {
    document.getElementById("output2").innerHTML = `
        <p style="color:red;">
            Error: The dog you selected does not exist in the list.
        </p>
    `;
}

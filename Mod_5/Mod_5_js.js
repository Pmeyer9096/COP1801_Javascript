// ---------------------------------------------------------
// PART 1: Object Literal (myDog)
// ---------------------------------------------------------

// Creating a literal object for Scooby-Doo
let myDog = {
    name: "Scooby-Doo",
    species: "Great Dane",
    gender: "Male",
    origin: "Scooby-Doo, Where Are You!",
    personality: "Goofy, friendly, easily scared",
    mySound: "Ruh-roh! I get scared easily, but I’m always loyal!"
};

// Displaying the literal object information
let dogDescription = `
    <h3>Object Literal: My Dog</h3>
    <p>
        Name: ${myDog.name}<br>
        Species: ${myDog.species}<br>
        Gender: ${myDog.gender}<br>
        Origin: ${myDog.origin}<br>
        Personality: ${myDog.personality}<br>
        Sound: ${myDog.mySound}
    </p>
`;

document.getElementById("output1").innerHTML = dogDescription;


// ---------------------------------------------------------
// PART 2: Constructor Function (myDogConst)
// ---------------------------------------------------------

// Creating a constructor for a dog object
function Dog(name, species, gender, origin, personality, mySound, canTalk) {
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.origin = origin;
    this.personality = personality;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Object method
    this.myGreeting = function() {
        return `
            <h3>Constructor Object: My Dog</h3>
            <p>
                Hello! My name is ${this.name}.<br>
                I am a ${this.species} from ${this.origin}.<br>
                My personality is: ${this.personality}.<br>
                What do I sound like? "${this.mySound}"<br>
                Can I talk? ${this.canTalk}<br>
            </p>
        `;
    };
}

// Creating the constructor-based dog object
let myDogConst = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Male",
    "Scooby-Doo, Where Are You!",
    "Goofy, friendly, easily scared",
    "Ruh-roh! I get scared easily, but I’m always loyal!",
    true
);

// Displaying the constructor method output
document.getElementById("output2").innerHTML = myDogConst.myGreeting();
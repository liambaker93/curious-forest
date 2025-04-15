// Various game function consts

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

// This function will be the first one used when the user opts to start a new game //
function gameStart() {
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
      
      buttonShow();
      
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      buttonA.addEventListener("click", resultButtonA);
      buttonB.addEventListener("click", gameButtonB);
      buttonC.addEventListener("click", gameButtonC);

    };

// This element will display a button for the user to select their option on each card //
// This function removes the hidden class from the selection buttons

function buttonShow() {
    buttonA.classList.remove("hidden");
    buttonB.classList.remove("hidden");
    buttonC.classList.remove("hidden");
}

function buttonHide() {
    buttonA.classList.add("hidden");
    buttonB.classList.add("hidden");
    buttonC.classList.add("hidden");
}

function showContinue() {
    buttonContinue.classList.remove("hidden");
    buttonContinue.addEventListener("click", nextLevel());
}

function hideContinue() {
    buttonContinue.classList.add("hidden");
}

// functions for each button press

function gameButtonA() {
    buttonACounter++;
    console.log(buttonACounter);
    if (buttonACounter > buttonBCounter && buttonACounter > buttonCCounter ) {
        imageHeader.innerHTML = `${combatImageSources[0]}`;
        mainText.innerHTML = `${combatTextPrompt[0]}`;
      }
    buttonACounter--;
}

function gameButtonB() {
    buttonBCounter++;
    console.log(buttonBCounter);
    if (buttonBCounter > buttonACounter && buttonBCounter > buttonCCounter) {
        imageHeader.innerHTML = `${combatImageSources[1]}`;
        mainText.innerHTML = `${combatTextPrompt[1]}`;
      };
    buttonBCounter--;
}

function gameButtonC() {
    buttonCCounter++;
    console.log(buttonCCounter);
    if (buttonCCounter > buttonACounter && buttonCCounter > buttonBCounter) {
        imageHeader.innerHTML = `${combatImageSources[2]}`;
        mainText.innerHTML = `${combatTextPrompt[2]}`;
    }
    buttonCCounter--;
}

// Result functions

function resultButtonA() {
    buttonACounter++;
    console.log(buttonACounter);
    if (buttonA.textContent.includes("Accept")) {
        imageHeader.innerHTML = `${resultImageSources[0]}`;
        mainText.innerHTML = `${resultTextPrompt[0]}`;
        buttonHide();
        showContinue();
    } else {
        console.log("No selection made")
    };
}



// This section contains the images needed for each kind of level

// Combat card section

const combatImageSources = [
    "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>", 
    "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'>",
    "<img src='assets/images/combat-card-three.png' alt='An angry fox stands over the corpse of a dog, growling at you'>",
];


const combatTextPrompt = [
    "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>",
    "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>",
    "<p>You step deeper into the forest and hear a mix of growling and whining and then suddenly a whimper. Upon investigating, you find an aggressive looking fox stood over the body of a dead dog. What do you do?</p>",
];

// Encounter Card section

// Result Card section

const resultImageSources = [
    "<img src='assets/images/result-card-one.png' alt='A man standing by a bar is handing you a full pint of beer'>",

]

const resultTextPrompt = [
    "<p>He hands the drink over to you and tells you a tale of an evening where he brawled a bar full of drunkards just to save one newcomer from ending the night thrown out into a haybale. He sways and falls backwards onto his stool, passing out before finishing the story. You drink the beer and feel a spring in your step.<p>",
]
    



// Button counters to use with function if statements

let buttonACounter = 0
let buttonBCounter = 0
let buttonCCounter = 0


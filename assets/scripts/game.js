// This function will be the first one used when the user opts to start a new game //
function gameStart() {
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
      
      buttonShow();
      
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      buttonA.addEventListener("click", gameButtonA);
    };

// This element will display a button for the user to select their option on each card //
// This function removes the hidden class from the selection buttons

function buttonShow() {
    buttonA.classList.remove("hidden");
    buttonB.classList.remove("hidden");
    buttonC.classList.remove("hidden");
}

function gameButtonA() {
    imageHeader.innerHTML = `${combatImageSources[1]}`;
    mainText.innerHTML = `${combatTextPrompt[1]}`;
}



// This section contains the images needed for each kind of level

// Combat card section

const combatImageSources = [
    "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>", 
    "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'>",
];


const combatTextPrompt = [
    "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>",
    "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>"
];

// Encounter Card section


    

// Various game function consts

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");


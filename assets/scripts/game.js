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
      
      buttonToggle();
      randomCombatEasy;
      
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      buttonA.addEventListener("click", resultButtonA);
      buttonB.addEventListener("click", resultButtonB);
      buttonC.addEventListener("click", resultButtonC);

    };

// Next level function used after all result cards

function nextLevel() {
    hideContinue();
    buttonToggle();
    randomCombat();
  
    imageHeader.innerHTML = `${combatImageSources[x]}`;
    mainText.innerHTML = `${combatTextPrompt[x]}`;
   
    buttonA.innerText = `${combatButtonA[x]}`;
    buttonB.innerText = `${combatButtonB[x]}`;
    buttonC.innerText = `${combatButtonC[x]}`;
    console.log(x);
   
    buttonA.addEventListener("click", resultButtonA);
    buttonB.addEventListener("click", resultButtonB);
    buttonC.addEventListener("click", resultButtonC);
}


// This function removes the hidden class from the selection buttons

function buttonToggle() {
    buttonA.classList.toggle("hidden");
    buttonB.classList.toggle("hidden");
    buttonC.classList.toggle("hidden");
}


function showContinue() {
    buttonContinue.classList.remove("hidden");
    buttonContinue.addEventListener("click", nextLevel);
}

function hideContinue() {
    buttonContinue.classList.add("hidden");
}

// functions for each button press

function gameButtonA() {
    buttonACounter++;
    randomCombat();
    if (buttonACounter > buttonBCounter && buttonACounter > buttonCCounter ) {
        imageHeader.innerHTML = `${combatImageSources[x]}`;
        mainText.innerHTML = `${combatTextPrompt[x]}`;
      }
    buttonACounter--;
}

function gameButtonB() {
    buttonBCounter++;

    if (buttonBCounter > buttonACounter && buttonBCounter > buttonCCounter) {
        imageHeader.innerHTML = `${combatImageSources[x]}`;
        mainText.innerHTML = `${combatTextPrompt[x]}`;
      };
    buttonBCounter--;
}

function gameButtonC() {
    buttonCCounter++;

    if (buttonCCounter > buttonACounter && buttonCCounter > buttonBCounter) {
        imageHeader.innerHTML = `${combatImageSources[2]}`;
        mainText.innerHTML = `${combatTextPrompt[2]}`;
    }
    buttonCCounter--;
}

// Result functions

function resultButtonA() {
    buttonACounter++;
    
    buttonToggle();
    if (buttonA.textContent.includes("Accept")) {
        imageHeader.innerHTML = `${resultImageSources[0]}`;
        mainText.innerHTML = `${resultTextPrompt[0]}`;
    };
    showContinue();
    x++;
}


function resultButtonB() {
    buttonBCounter++;

    buttonToggle();
    if (buttonB.textContent.includes("Throw")) {
        imageHeader.innerHTML = `${resultImageSources[1]}`;
        mainText.innerHTML = `${resultTextPrompt[1]}`;
    } else if (buttonB.textContent.includes("")) {

    }
    
    else {
        console.log("No Selection made");
    };
    showContinue();
}

function resultButtonC() {
    buttonCCounter++;

    buttonToggle();
    if (buttonC.textContent.includes("leave")) {
        imageHeader.innerHTML = `${resultImageSources[2]}`;
        mainText.innerHTML = `${resultTextPrompt[2]}`;
    } else {
        console.log("No selection made");
    };
    showContinue();
}



// This section contains the images needed for each kind of level

//const combatCard = [`${combatImageSources}`, `${combatTextPrompt}`];
//const resultCard = [`${resultImageSources}`, `${resultTextPrompt}`];

// Combat card  function section

function combatCardOne() {
    imageHeader.innerHTML = "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>";
    mainText.innerHTML = "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>";
    buttonA.innerText = "Draw your sword and take a swing";
    buttonB.innerText = "Draw your sword ready to defend";
    buttonC.innerText = "Slowly back away";
}

function combatCardTwo() {
    imageHeader.innerHTML = "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'></img>";
    mainText.innerHTML = "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>";
    buttonA.innerText = "Sneak around them";
    buttonB.innerText = "Run through the group";
    buttonC.innerText = "Walk back the way you came";
}

function combatCardThree() {
    imageHeader.innerHTML = "<img src='assets/images/combat-card-three.png' alt='An angry fox stands over the corpse of a dog, growling at you'>";
    mainText.innerHTML =  "<p>You step deeper into the forest and hear a mix of growling and whining and then suddenly a whimper. Upon investigating, you find an aggressive looking fox stood over the body of a dead dog. What do you do?</p>";
    buttonA.innerText = "Take an aggressive stance";
    buttonB.innerText = "Drop to all fours and mimic the fox";
    buttonC.innerText = "Keep facing it and walk around it to get past";
}

const combatResultA = [
    "<p>You swing at the beast and as your arm reaches around it swipes at you with it's claws and cuts your chest. You recoil back and it runs away into the darkness</p>",
    "<p>They continue sitting and talking around the campfire, none the wiser to your slinking steps beyond them</p>",
    "<p>The fox stares you up and down and slowly bows it's head, gripping the dog with it's teeth and dragging it away into a nearby foxhole</p>",

]

const combatResultB = [
    "<p>You make a defensive stance against the beast, it swipes at you but you block it with your hand, and it's palm hits you. You take a swipe at it and cut it's right leg deep, causing it to run away<p>",
    "<p>You bolt it towards the campfire, they hear you coming and just as you're about to run straight through the fire, one of the nudges you off course. You stumble past the fire, your right foot landing in the burning ash, and you limp away into the darkness</p>",
    "<p>You drop your hands to the ground and start growling at the fox. The fox yaps back at you and starts to circle you. After completing a full rotation, it bolts underneath you and between your legs causing you to fly up and land on your back, the smell of dead dog in the air</p>",

]

const combatResultC = [
    "<p>You step backwards gently away from the beast, holding your hands up to show you're no threat. It ducks it's head and backs into the hedgeline, disappearing from view</p>",
    "<p>You count the number of bandits on your fingers and decide that actually this isn't a fight worth having, and leave the monastery the way you came in</p>",
    "<p>You tip toe around the fox not dropping eye contact, and once you're on the opposite side to where you started, you begin to slowly back away until it becomes uninterested and continues investigating it's dinner</p>",

]

// Encounter Card section

// Result Card section

const resultImageSources = [
    "<img src='assets/images/result-card-one.png' alt='A man standing by a bar is handing you a full pint of beer'>",
    "<img src='assets/images/result-card-two.png' alt='A man covered in beer, standing ready to fight against a bar'>",
    "<img src='assets/images/result-card-three.png' alt='The outisde of a pub with the interior and streetlamps on'>",

];

const resultTextPrompt = [
    "<p>He hands the drink over to you and tells you a tale of an evening where he brawled a bar full of drunkards just to save one newcomer from ending the night thrown out into a haybale. He sways and falls backwards onto his stool, passing out before finishing the story. You drink the beer and feel a spring in your step.<p>",
    "<p>You pour the beer over him. He quickly turns from intrigued to annoyed at your arrival and bares his fists ready to fight, and swings his arm straight into your jaw, knocking you back on to the ground</p>",
    "<p>You reject the drink and turn around, leaving the pub. No one pays any attention as you leave and they all get back to their lives. You leave the town and venture into the nearby forest</p>'"
];
    



// Button counters to use with function if statements

let buttonACounter = 0;
let buttonBCounter = 0;
let buttonCCounter = 0;

// Turn counter to pick which type of card is picked

 let turnCounter = 0;

function randomCombat(length) {   
  const cardSelect = new Set();
  while (cardSelect.size < length) {
    const randomNumber = Math.floor(Math.random() * 3);
    cardSelect.add(randomNumber);
  }

  return Array.from(cardSelect).join("");
}

const randomCombatEasy = randomCombat(3);
console.log(randomCombatEasy);
console.log(randomCombatEasy[0]);
console.log(randomCombatEasy[1]);
console.log(randomCombatEasy[2]);


/**
 * variables for selecting random cards to view
 * x is used for combat cards
 * y is used for encounter cards
 * z is used for boss cards */  
var x = randomCombatEasy[0];
var y = 0;
var z = 0;
const usedCombatIndex = x;
const usedEncounterIndex = y;
const usedBossIndex = z;

// F
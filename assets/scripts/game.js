// Various game function consts

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

// Button counters to use with function if statements

let buttonACounter = 0;
let buttonBCounter = 0;
let buttonCCounter = 0;

// This function will be the first one used when the user opts to start a new game //
function gameStart() {
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
      
      buttonToggle();
      
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      function gameStartResultA() {
        imageHeader.innerHTML = "<img src='assets/images/result-card-one.png' alt='A man standing by a bar is handing you a full pint of beer'>";
        mainText.innerHTML =  "<p>He hands the drink over to you and tells you a tale of an evening where he brawled a bar full of drunkards just to save one newcomer from ending the night thrown out into a haybale. He sways and falls backwards onto his stool, passing out before finishing the story. You drink the beer and feel a spring in your step.<p>"
        buttonToggle();
        showContinue();
    }

      function gameStartResultB() {
        imageHeader.innerHTML = "<img src='assets/images/result-card-two.png' alt='A man covered in beer, standing ready to fight against a bar'>";
        mainText.innerHTML =  "<p>You pour the beer over him. He quickly turns from intrigued to annoyed at your arrival and bares his fists ready to fight, and swings his arm straight into your jaw, knocking you back on to the ground</p>";
        buttonToggle();
        showContinue();
    }

      function gameStartResultC() {
        imageHeader.innerHTML =  "<img src='assets/images/result-card-three.png' alt='The outisde of a pub with the interior and streetlamps on'>";
        mainText.innerHTML =  "<p>You reject the drink and turn around, leaving the pub. No one pays any attention as you leave and they all get back to their lives. You leave the town and venture into the nearby forest</p>'";
        buttonToggle();
        showContinue();
    }

      buttonA.addEventListener("click", gameStartResultA);
      buttonB.addEventListener("click", gameStartResultB);
      buttonC.addEventListener("click", gameStartResultC);

    };

// Next level function used after all result cards

function nextLevel() {
    ++x;
    hideContinue();
   // buttonToggle();
    if (x === 1) {
        combatCardOne();
    } else if (x === 2) {
        combatCardTwo();
    } else if (x === 3) {
        combatCardThree();
    } else {
        console.log("End of cards");
        mainText.innerHTML = "<p>Well, it seems like the adventure has closed, rather unceremoniously... Return Adventurer! Maybe you'll get lucky next time...</p>"
        imageHeader.classList.add("hidden");
        buttonContinue.classList.remove("hidden");
        buttonContinue.innerText = "Return to the pub";
        buttonContinue.addEventListener("click", function() {
            window.location.reload();
        });
    };
};

// This function removes the hidden class from the selection buttons

function buttonToggle() {
    buttonA.classList.toggle("hidden");
    buttonB.classList.toggle("hidden");
    buttonC.classList.toggle("hidden");
};

function showContinue() {
    buttonContinue.classList.remove("hidden");
    buttonContinue.addEventListener("click", nextLevel);
};

function hideContinue() {
    buttonContinue.classList.add("hidden");
};

// Combat card  function section

function combatCardOne() {
    buttonToggle();
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>";
    mainText.innerHTML = "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>";
    buttonA.innerText = "Draw your sword and take a swing";
    buttonB.innerText = "Draw your sword ready to defend";
    buttonC.innerText = "Slowly back away";

    buttonA.addEventListener("click", combatCardOneResultA);
    buttonB.addEventListener("click", combatCardOneResultB);
    buttonC.addEventListener("click", combatCardOneResultC);

    function combatCardOneResultA() {
        mainText.innerHTML =  "<p>You swing at the beast and as your arm reaches around it swipes at you with it's claws and cuts your chest. You recoil back and it runs away into the darkness</p>";
        showContinue();
    }

    function combatCardOneResultB() {
        mainText.innerHTML = "<p>You make a defensive stance against the beast, it swipes at you but you block it with your hand, and it's palm hits you. You take a swipe at it and cut it's right leg deep, causing it to run away<p>";
        showContinue();
    }

    function combatCardOneResultC() {
        mainText.innerHTML = "<p>You step backwards gently away from the beast, holding your hands up to show you're no threat. It ducks it's head and backs into the hedgeline, disappearing from view</p>";
        showContinue();
    }

};

function combatCardTwo() {
    buttonToggle();
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'></img>";
    mainText.innerHTML = "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>";
    buttonA.innerText = "Sneak around them";
    buttonB.innerText = "Run through the group";
    buttonC.innerText = "Walk back the way you came";

    buttonA.addEventListener("click", function() {
        combatCardTwoResultA();
        showContinue();
    });
    buttonB.addEventListener("click", function() {
        combatCardTwoResultB();
        showContinue();
    });
    buttonC.addEventListener("click", function() {
        combatCardTwoResultC();
        showContinue();
    });

    function combatCardTwoResultA() {
      // imageHeader.innerHTML = 
      mainText.innerHTML = "<p>They continue sitting and talking around the campfire, none the wiser to your slinking steps beyond them</p>";
    }

    function combatCardTwoResultB() {
        // new image will be needed = imageHeader.innerHTML = 
        mainText.innerHTML =  "<p>You bolt it towards the campfire, they hear you coming and just as you're about to run straight through the fire, one of the nudges you off course. You stumble past the fire, your right foot landing in the burning ash, and you limp away into the darkness</p>";
    }

    function combatCardTwoResultC() {
        // new image will be needed = imageHeader.innerHTML = 
        mainText.innerHTML =  "<p>You count the number of bandits on your fingers and decide that actually this isn't a fight worth having, and leave the monastery the way you came in</p>";
    }
};

function combatCardThree() {
    buttonToggle();
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-three.png' alt='An angry fox stands over the corpse of a dog, growling at you'>";
    mainText.innerHTML =  "<p>You step deeper into the forest and hear a mix of growling and whining and then suddenly a whimper. Upon investigating, you find an aggressive looking fox stood over the body of a dead dog. What do you do?</p>";
    buttonA.innerText = "Take an aggressive stance";
    buttonB.innerText = "Drop to all fours and mimic the fox";
    buttonC.innerText = "Keep facing it and walk around it to get past";

    buttonA.addEventListener("click", combatCardThreeResultA);
    buttonB.addEventListener("click", combatCardThreeResultB);
    buttonC.addEventListener("click", combatCardThreeResultC);

    function combatCardThreeResultA() {
        // new image will be needed = imageHeader.innerHTML = 
        mainText.innerHTML = "<p>The fox stares you up and down and slowly bows it's head, gripping the dog with it's teeth and dragging it away into a nearby foxhole</p>";
        showContinue();
    }

    function combatCardThreeResultB() {
        // new image will be needed = imageHeader.innerHTML = 
        mainText.innerHTML = "<p>You drop your hands to the ground and start growling at the fox. The fox yaps back at you and starts to circle you. After completing a full rotation, it bolts underneath you and between your legs causing you to fly up and land on your back, the smell of dead dog in the air</p>";
        showContinue();
    }

    function combatCardThreeResultC() {
        // new image will be needed = imageHeader.innerHTML = 
        mainText.innerHTML = "<p>You tip toe around the fox not dropping eye contact, and once you're on the opposite side to where you started, you begin to slowly back away until it becomes uninterested and continues investigating it's dinner</p>";
        showContinue();
    }
};

// Turn counter to pick which type of card is picked

 let turnCounter = 0;

function randomCombat(length) {   
  const cardSelect = new Set();
  while (cardSelect.size < length) {
    const randomNumber = Math.floor(Math.random() * 3);
    cardSelect.add(randomNumber);
  }

  return Array.from(cardSelect).join("");
};

const randomCombatEasy = randomCombat(3);
console.log(randomCombatEasy);
console.log(randomCombatEasy[0]);
console.log(randomCombatEasy[1]);
console.log(randomCombatEasy[2]);

function pickRandomCombat(arr) {
    if (!arr || arr.length === 0) {
        return undefined;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

};

const combatCards = [combatCardOne, combatCardTwo, combatCardThree];

const randomCard = pickRandomCombat(combatCards);

function randomCombatSelection() {
    return randomCard;
};

/**
 * variables for selecting random cards to view
 * x is used for combat cards
 * y is used for encounter cards
 * z is used for boss cards */  
var x = 0;
var y = 0;
var z = 0;
const usedCombatIndex = x;
const usedEncounterIndex = y;
const usedBossIndex = z;

// Various game function consts

// const { check } = require("yargs");

// const { check } = require("yargs");

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");
const adventureStart = document.getElementById("adventure-start");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

const arrBtns = [buttonA, buttonB, buttonC];


var health = 6

// This function will be the first one used when the user opts to start a new game //
function gameStart() {
      checkHealth(health);
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
        health -= 1;
        checkHealth();
        buttonToggle();
        showContinue();
    }

      function gameStartResultC() {
        imageHeader.innerHTML =  "<img src='assets/images/result-card-three.png' alt='The outisde of a pub with the interior and streetlamps on'>";
        mainText.innerHTML =  "<p>You reject the drink and turn around, leaving the pub. No one pays any attention as you leave and they all get back to their lives. You leave the town and venture into the nearby forest</p>'";
        buttonToggle();
        showContinue();
    };
    
      arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                gameStartResultA();
            } else if (button === buttonB) {
                gameStartResultB();
            } else if (button === buttonC) {
                gameStartResultC();
            };
        });
    });

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
// This function runs if your health reaches 0. Currently a copy of the code that runs when there are no more cards to show the player.
function gameOver() {
    mainText.innerHTML = "<p>Well, it seems like the adventure has closed, rather unceremoniously... Return Adventurer! Maybe you'll get lucky next time...</p>"
    imageHeader.classList.add("hidden");
    buttonContinue.classList.remove("hidden");
    buttonContinue.innerText = "Return to the pub";
    buttonContinue.addEventListener("click", function() {
        window.location.reload();
});
}

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

// This function removes health from the player

const healthOne = document.getElementById("heart-one");
const healthTwo = document.getElementById("heart-two");
const healthThree = document.getElementById("heart-three");

const fullHearts = [healthOne, healthTwo, healthThree];
const medHearts = [healthOne, healthTwo];

function checkHealth() {
    if (health === 6) {
        fullHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
            }
        });
    } else if (health === 5) {
        fullHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
                healthThree.classList.remove("fa-heart");
                healthThree.classList.add("fa-heart-crack");
            }
        });
    } else if (health === 4) {
        medHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
            }
        });
    } else if (health === 3) {
        medHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
                healthTwo.classList.remove("fa-heart");
                healthTwo.classList.add("fa-heart-crack");
            }
        });
    } else if (health === 2) {
        healthOne.classList.remove("hidden");
    } else if (health === 1) {
        healthOne.classList.remove("hidden");
        healthOne.classList.remove("fa-heart");
        healthOne.classList.add("fa-heart-crack");
    }  else {
        gameOver();
    }
};


    

/*
function inputName(e) {
    checkHealth();
    let nameForm = document.getElementById("input-name");
    //e.preventDefault();
    //let inputName = e.target;
    nameForm.classList.remove("hidden");
    imageHeader.classList.add("hidden");
    adventureStart.classList.add("hidden");
    mainText.innerHTML = "<p>Input your name to get started, and when you click submit, the adventure will begin...</p>";
}
*/
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
        displayText("combatCardOneResultA");
    }

    function combatCardOneResultB() {
        displayText("combatCardOneResultB");
    }

    function combatCardOneResultC() {
        displayText("combatCardOneResultC");
    }

};

function combatCardTwo() {
    buttonToggle();
    hideContinue();
    fullHealth();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'></img>";
    mainText.innerHTML = "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>";
    buttonA.innerText = "Sneak around them";
    buttonB.innerText = "Run through the group";
    buttonC.innerText = "Walk back the way you came";

    buttonA.addEventListener("click", function() {
        combatCardTwoResultA();
    });
    buttonB.addEventListener("click", function() {
        combatCardTwoResultB();
    });
    buttonC.addEventListener("click", function() {
        combatCardTwoResultC();
    });

    function combatCardTwoResultA() {
        displayText(combatCardTwoResultA);
    };

    function combatCardTwoResultB() {
        displayText(combatCardTwoResultB);
    };

    function combatCardTwoResultC() {
        displayText(combatCardTwoResultB);
    };
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
        displayText(combatCardThreeResultA);
    };

    function combatCardThreeResultB() {
        displayText(combatCardThreeResultB)
    };

    function combatCardThreeResultC() {
        displayText(combatCardThreeResultC)
    };
};

// Turn counter to pick which type of card is picked
/**
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

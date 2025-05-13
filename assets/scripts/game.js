// Various game function consts

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");
const adventureStart = document.getElementById("adventure-start");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

const arrBtns = [buttonA, buttonB, buttonC];

const gameCards = [combatCardOne, combatCardTwo, combatCardThree];
shuffleCards(gameCards);
let gameCardIndex = 0;

var health = 6;
let maxHealth = 6;
let minHealth = 0;

let bossCardRun = false;

function healthAdjust(adjust) {
    health = health + adjust;

    //health = Math.min(health, maxHealth); //Stops the health going over the maximum health points selected
    //health = Math.max(health, minHealth); // Stops the health going below 0

}

// This function will be the first one used when the user opts to start a new game //
function gameStart() {
    checkHealth();
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
      
      buttonToggle();
      
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            buttonToggle();
            showContinue();
            if (button === buttonA) {
                 imageHeader.innerHTML = gameStartData[0].imageHeader;
                 mainText.innerHTML =  gameStartData[0].mainText;
            } else if (button === buttonB) {
                imageHeader.innerHTML = gameStartData[1].imageHeader;
                mainText.innerHTML = gameStartData[1].mainText;
                healthAdjust(-2);
            } else if (button === buttonC) {
                imageHeader.innerHTML = gameStartData[2].imageHeader;
                mainText.innerHTML = gameStartData[2].mainText;
            };
        });
    });

    };

// Shuffle function for combat cards

function shuffleCards(array) {
    for (let n = array.length - 1; n > 0; n--) {
        const j = Math.floor(Math.random() * (n + 1));
        [array[n], array[j]] = [array[j], array[n]];
    }
}

// Next level function used after all result cards

// let encounterCardOneRun = false;
// let encounterCardTwoRun = false;

function nextLevel() {
    ++x;
    checkHealth();
    hideContinue();
    buttonToggle();
    if (x === 1 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (x === 2) {
        encounterCardOne();
       // encounterCardOneRun = true;
    } else if (x === 3 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (x === 4) {
        encounterCardTwo();
       // encounterCardTwoRun = true; 
    } else if (x === 5 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (bossCardRun = true) {
        bossCardOneSecondary();
    } else {
        console.log("End of cards");
        buttonToggle();
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

// These functions removes the hidden class from the selection buttons

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
                healthThree.classList.add("hidden");
            }
        });
    } else if (health === 3) {
        medHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
                healthTwo.classList.remove("fa-heart");
                healthTwo.classList.add("fa-heart-crack");
                healthThree.classList.add("hidden");
            }
        });
    } else if (health === 2) {
        healthOne.classList.remove("hidden");
        healthTwo.classList.add("hidden");
    } else if (health === 1) {
        healthTwo.classList.add("hidden");
        healthOne.classList.remove("hidden");
        healthOne.classList.remove("fa-heart");
        healthOne.classList.add("fa-heart-crack");
    }  else {
        gameOver();
    }
    console.log(health);
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
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>";
    mainText.innerHTML = "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>";
    buttonA.innerText = "Draw your sword and take a swing";
    buttonB.innerText = "Draw your sword ready to defend";
    buttonC.innerText = "Slowly back away";

arrBtns.forEach(button  => {
    button.addEventListener("click", function() {                
        if (button === buttonA) {
            displayText("combatCardOneResultA");
            healthAdjust(-2);
            buttonToggle(); 
        } else if (button === buttonB) {
            displayText("combatCardOneResultB");
            buttonToggle();
            healthAdjust(-1);
        } else if (button === buttonC) {
            displayText("combatCardOneResultC");
            buttonToggle(); 
        };
    });
});

}

function combatCardTwo() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'></img>";
    mainText.innerHTML = "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>";
    buttonA.innerText = "Sneak around them";
    buttonB.innerText = "Run through the group";
    buttonC.innerText = "Walk back the way you came";

    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("combatCardTwoResultA");
                buttonToggle(); 
            } else if (button === buttonB) {
                displayText("combatCardTwoResultB");
                healthAdjust(-1);
                buttonToggle(); 
            } else if (button === buttonC) {
                displayText("combatCardTwoResultC");
                buttonToggle(); 
            };
        });
    });
};

function combatCardThree() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-three.png' alt='An angry fox stands over the corpse of a dog, growling at you'>";
    mainText.innerHTML =  "<p>You step deeper into the forest and hear a mix of growling and whining and then suddenly a whimper. Upon investigating, you find an aggressive looking fox stood over the body of a dead dog. What do you do?</p>";
    buttonA.innerText = "Take an aggressive stance";
    buttonB.innerText = "Drop to all fours and mimic the fox";
    buttonC.innerText = "Keep facing it and walk around it to get past";

    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("combatCardThreeResultA");
                buttonToggle(); 
            } else if (button === buttonB) {
                displayText("combatCardThreeResultB");
                healthAdjust(-1);
                buttonToggle(); 
            } else if (button === buttonC) {
                displayText("combatCardThreeResultC");
                buttonToggle(); 
            };
        });
    });
};

// encounter card functions

function encounterCardOne() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/encounter-card-one.png' alt='A merchant pulling a cart through a forest'>";
    mainText.innerHTML = "<p>Wandering through the forest, you stumble upon a merchant. He's pulling his wares and stops you, looking you up and down. 'Adventurer, what can I offer you?'</p>";
    buttonA.innerText = "Have a health potion?";
    buttonB.innerText = "Carrying any superior health potions?";
    buttonC.innerText = "I'm alright thank you, I don't need anything.";

    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            buttonToggle();
            if (button === buttonA) {
                displayText("encounterCardOneResultA");
                healthAdjust(1);
            } else if (button === buttonB) {
                displayText("encounterCardOneResultB");
                healthAdjust(2);
            } else if (button === buttonC) {
                displayText("encounterCardOneResultC");
            };
        });
    });
};

function encounterCardTwo() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/encounter-card-two.png' alt='A gnome sat on a mushroom'>";
    mainText.innerHTML = "<p>You walk over a log and step into a field of mushrooms, all glowing different colours. You hear a snigger as a gnome reaches up and leaps up atop one. 'You look weary. One of these mushrooms will help you with that, I'm afraid I just can't remember which one...'What do you do?</p>";
    buttonA.innerText = "Try a purple mushroom";
    buttonB.innerText = "Try the red mushroom";
    buttonC.innerText = "Decline the offer";
    
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("encounterCardTwoResultA");
                healthAdjust(2);
                buttonToggle();
            } else if (button === buttonB) {
                displayText("encounterCardTwoResultB");
                healthAdjust(-2);
                buttonToggle();
            } else if (button === buttonC) {
                displayText("encounterCardTwoResultC");
                buttonToggle(); 
            };
        });
    });
};

// Boss card functions. These functions act differently, using two levels within themselves

function bossCardOne() {
    bossCardRun = true;
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/boss-card-one.png' alt='A balrog stands behind a large rock in a cave'>";
    mainText.innerHTML = "<p>You walk down through the cave, and feel warmth striking it's way down the stone corridors. You see streaks of fire erupt from behind a rock, and see a Balrog sneaking around it towards you. What do you do?</p>";
    buttonA.innerText = "Slowly walk towards it and draw your sword ready to attack";
    buttonB.innerText = "Rush towards it, sword drawn, right underneath it's foot";
    buttonC.innerText = "Stop where you stand"

        arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("bossCardOneResultA");
                healthAdjust(-3);
                buttonToggle();
            } else if (button === buttonB) {
                displayText("bossCardOneResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("bossCardOneResultC");
                buttonToggle(); 
            };
        });
    });
}

function bossCardOneSecondary() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/boss-card-one-second.png' alt='The balrog stands firm surrounded by ruins'>";
    mainText.innerHTML = "<p>The balrog prepares to fight again, smacking itself against the walls of the cave, causing stone to crack and fall to the ground</p>";
    buttonA.innerText = "Attempt to climb it's leg";
    buttonB.innerText = "Wait for it to step a little closer to you";
    buttonC.innerText = "Hold by the rock, drawing it's fire breath";

            arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("bossCardOneSecondaryResultA");
                healthAdjust(-4);
                buttonToggle();
            } else if (button === buttonB) {
                displayText("bossCardOneSecondaryResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("bossCardOneSecondaryResultC");
                healthAdjust(-4);
                buttonToggle(); 
            };
        });
    });
}
   

/* * variables for selecting random cards to view
 * x is used for combat cards
 * y is used for encounter cards
 * z is used for boss cards */  
var x = 0;
var y = 0;
var z = 0;
const usedCombatIndex = x;
const usedEncounterIndex = y;
const usedBossIndex = z;

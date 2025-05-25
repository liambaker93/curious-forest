// Various game function consts

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");
const adventureStart = document.getElementById("adventure-start");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

const arrBtns = [buttonA, buttonB, buttonC];

// These arrays are used to shuffle which cards will be displayed creating a randomness to the game everytime the player clicks start.

const gameCards = [combatCardOne, combatCardTwo, combatCardThree, combatCardFour, combatCardFive];
shuffleCards(gameCards);
let gameCardIndex = 0;

const bossCards = [bossCardOne, bossCardTwo];
shuffleCards(bossCards);
let bossCardIndex = 0;

const encounterCards = [encounterCardOne, encounterCardTwo, encounterCardThree];
shuffleCards(encounterCards);
let encounterCardIndex = 0;

// max and min health points can be used to vary difficulty in later development, assigning them now means that they have been worked into the code already.

let health = 6;
let maxHealth = 6;
let minHealth = 0;

// bossCardRun is used to show the player is in the boss stage, as the boss stage carries two seperate 'levels', the game needs to know that the boss has been activated.

let bossCardRun = false;

// x is used to cycle through levels, the above randomisers are used to pick which level is displayed to the player.

var x = 0;

// healthAdjust is used throughout the levels to adjust the health of the player depending on their actions.

function healthAdjust(adjust) {
    health = health + adjust;

    health = Math.min(health, maxHealth); //Stops the health going over the maximum health points selected
    health = Math.max(health, minHealth); // Stops the health going below 0

}

// This function will be the first one used when the user opts to start a new game //
function gameStart() {
    checkHealth();
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
          
      buttonA.innerText = "Accept the drink";
      buttonB.innerText = "Throw the drink in his face";
      buttonC.innerText = "Turn and leave the pub";

      arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("gameStartResultA");
            } else if (button === buttonB) {
                displayText("gameStartResultB");
            } else if (button === buttonC) {
                displayText("gameStartResultC");
            };
        });
    });

    };

// Shuffle function for picking which cards will be used

function shuffleCards(array) {
    for (let n = array.length - 1; n > 0; n--) {
        const j = Math.floor(Math.random() * (n + 1));
        [array[n], array[j]] = [array[j], array[n]];
    }
}

// Next level function used after all result cards

function nextLevel() {
    ++x;
    checkHealth();
    hideContinue();
    buttonToggle();
    console.log(level = x);
    if (x === 1) {
        gameStart();
    } else if (x === 2 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (x === 3 && encounterCardIndex < encounterCards.length) {
       encounterCards[encounterCardIndex]();
       encounterCardIndex++;
    } else if (x === 4 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (x === 5 && encounterCardIndex < encounterCards.length) {
        encounterCards[encounterCardIndex]();
        encounterCardIndex++;
    } else if (x === 6 && gameCardIndex < gameCards.length) {
        gameCards[gameCardIndex]();
        gameCardIndex++;
    } else if (x >= 7 && bossCardRun === false && bossCardIndex < bossCards.length) {
        bossCards[bossCardIndex]();
    } else if (x >= 7 && bossCardRun === true) {
        if (mainText.textContent.includes("balrog")) {
        bossCardOneSecondary();
        } else if (mainText.textContent.includes("wizard")) {
        bossCardTwoSecondary();
        }
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
    arrBtns.forEach(button => { //This if will run through the buttons to check if they need to be hidden or not
        if (!button.classList.contains("hidden")) {
            button.classList.add("hidden")
        };
    });
    mainText.innerHTML = "<p>Unfortunately you have been bested...this time! Return to the pub and try your luck again!</p>"
    imageHeader.classList.add("hidden");
    buttonContinue.classList.remove("hidden");
    buttonContinue.innerText = "Return to the pub";
    buttonContinue.addEventListener("click", function() {
        window.location.reload();
});
}

function gameWin() {
    arrBtns.forEach(button => { //This if will run through the buttons to check if they need to be hidden or not
        if (!button.classList.contains("hidden")) {
            button.classList.add("hidden")
        };
    });
    mainText.innerHTML = "<p>Well done! You beat the adventure, and scored a prize. Dare you try your luck again?</p>"
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

function showContinue(level) {
    buttonContinue.classList.remove("hidden");
    buttonContinue.addEventListener("click", level);
};

function hideContinue() {
    buttonContinue.classList.add("hidden");
};

// This section handles the health of the player.

const healthOne = document.getElementById("heart-one");
const healthTwo = document.getElementById("heart-two");
const healthThree = document.getElementById("heart-three");

const fullHearts = [healthOne, healthTwo, healthThree];
const medHearts = [healthOne, healthTwo];
const lowHearts = [healthOne];

// This function checks the health of the player and then visually displays that.

function resetHealth() {
    [healthOne, healthTwo, healthThree].forEach(i => {
        if (i && i.classList) {
            i.classList.remove("hidden", "fa-heart-crack", "health-change");
            i.classList.add("fa-heart");
        }
    });
};

function checkHealth() {
    resetHealth();
    if (health === 6) {
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
                healthThree.classList.add("health-change");
            }
        });
    } else if (health === 3) {
        medHearts.forEach(i => {
            if (i && i.classList) {
                i.classList.remove("hidden");
                healthTwo.classList.remove("fa-heart");
                healthTwo.classList.add("fa-heart-crack");
                healthThree.classList.add("health-change");
            }
        });
    } else if (health === 2) {
        healthOne.classList.remove("hidden");
        healthTwo.classList.add("health-change");
        healthThree.classList.add("health-change");
    } else if (health === 1) {
        healthThree.classList.add("health-change");
        healthTwo.classList.add("health-change");
        healthOne.classList.remove("hidden");
        healthOne.classList.remove("fa-heart");
        healthOne.classList.add("fa-heart-crack");
    }  else {
        fullHearts.forEach(i => {
            i.classList.remove("hidden");
            i.classList.add("health-change");
        });
        buttonContinue.addEventListener("click", gameOver);
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
            buttonToggle();
        } else if (button === buttonB) {
            displayText("combatCardOneResultB");
            buttonToggle();
        } else if (button === buttonC) {
            displayText("combatCardOneResultC");
            buttonToggle();
        };
    });
});

};

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
                buttonToggle();
            } else if (button === buttonC) {
                displayText("combatCardThreeResultC");
                buttonToggle();
            };
        });
    });
};

function combatCardFour() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-four.png' alt='An archer standing in a tree holding a bow and arrow'>";
    mainText.innerHTML = "<p>Walking through the forest, you walk upon an archer hiding in a treetop, pointing his arrow straight at you.</p>";
    buttonA.innerText = "You ask him for directions";
    buttonB.innerText = "Threaten him";
    buttonC.innerText = "Declare yourself powerful";
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("combatCardFourResultA");
                buttonToggle();
            } else if (button === buttonB) {
                displayText("combatCardFourResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("combatCardFourResultC");
                buttonToggle();
            };
        });
    });
};

function combatCardFive() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/combat-card-five.png' alt='A bear standing in a lake'>";
    mainText.innerHTML = "<p>You follow the sound of a lake and find a bear calmly drinking from it. You break a tree branch on the ground and it darts it's head around to stare directly at you. What do you do?</p>";
    buttonA.innerText = "Draw your sword and threaten it";
    buttonB.innerText = "Stare at it and stand your ground";
    buttonC.innerText = "Pet the bear";
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("combatCardFiveResultA");
                buttonToggle();
            } else if (button === buttonB) {
                displayText("combatCardFiveResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("combatCardFiveResultC");
                buttonToggle();
            };
        });
    });
}

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
            if (button === buttonA) {
                displayText("encounterCardOneResultA");
                buttonToggle();
            } else if (button === buttonB) {
                displayText("encounterCardOneResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("encounterCardOneResultC");
                buttonToggle();
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
                buttonToggle();
            } else if (button === buttonB) {
                displayText("encounterCardTwoResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("encounterCardTwoResultC");
                buttonToggle();
            };
        });
    });
};

function encounterCardThree() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/encounter-card-three.png' alt='A squirrel sitting on a branch holding an acorn'>";
    mainText.innerHTML = "<p>You walk underneath a set of trees with perfect, interlocking branches. On top of the one of the branches is a squirrel, holding an acorn tightly. Slowly it scampers down the tree to the trunk. What do you do?</p>";
    buttonA.innerText = "Reach out to the squirrel";
    buttonB.innerText = "Watch and wait";
    buttonC.innerText = "Step towards the squirrel";
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("encounterCardThreeResultA");
                buttonToggle();
            } else if (button === buttonB) {
                displayText("encounterCardThreeResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("encounterCardThreeResultC");
                buttonToggle();
            };
        });
    });
}

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
                bossDisplayText("bossCardOneSecondaryResultA");
            } else if (button === buttonB) {
                bossDisplayText("bossCardOneSecondaryResultB");
            } else if (button === buttonC) {
                bossDisplayText("bossCardOneSecondaryResultC");
            };
        });
    });
}

function bossCardTwo() {
    bossCardRun = true;
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/boss-card-two.png' alt='A wizard floats above a clifftop'>";
    mainText.innerHTML = "<p>You follow the sun and walk out of the forest to the edge of a cliff, and there waiting for you is a wizard, preparing a spell. 'So you're the one who's been messing around with MY forest? This should teach you..'</p>";
    buttonA.innerText = "Hide from the blast";
    buttonB.innerText = "Parry the spell";
    buttonC.innerText = "Stand your ground";
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText("bossCardTwoResultA");
                buttonToggle();
            } else if (button === buttonB) {
                displayText("bossCardTwoResultB");
                buttonToggle();
            } else if (button === buttonC) {
                displayText("bossCardTwoResultC");
                buttonToggle();
            };
        });
    });
};

function bossCardTwoSecondary() {
    hideContinue();
    imageHeader.innerHTML = "<img src='assets/images/boss-card-two-secondary.png' alt='A wizard knelt on the ground, preparing a spell'>";
    mainText.innerHTML = "<p>The wizard takes a moment to recover on the ground, closing his eyes slowly and preparing a spell between his hands. You see magik swirling around his palms and you feel a power emanate from him</p>";
    buttonA.innerText = "Interrupt the spell";
    buttonB.innerText = "Hide from the spell";
    buttonC.innerText = "Charge the wizard";
    arrBtns.forEach(button  => {
        button.addEventListener("click", function() {
            if (button === buttonA) {
                bossDisplayText("bossCardTwoSecondaryResultA");
            } else if (button === buttonB) {
                bossDisplayText("bossCardTwoSecondaryResultB");
            } else if (button === buttonC) {
                bossDisplayText("bossCardTwoSecondaryResultC");
            };
        });
    });
};


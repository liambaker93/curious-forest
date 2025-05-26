// Various game function consts
document.addEventListener("DOMContentLoaded", function() {


const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

const arrBtns = [buttonA, buttonB, buttonC];

// These arrays are used to shuffle which cards will be displayed creating a randomness to the game everytime the player clicks start.

shuffleCards(combatCardArr);
let gameCardIndex = 0;

shuffleCards(bossCardArr);
let bossCardIndex = 0;

shuffleCards(encounterCardArr);
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

};

// Next level function used after all result cards

function nextLevel() {
    ++x;
    checkHealth();
    hideContinue();
    buttonToggle();
    console.log(level = x);
    if (x === 1) {
        gameStart();
    } else if (x === 2) {
        combatCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 3 && encounterCardIndex < encounterCardArr.length) {
       combatCard(encounterCardArr[encounterCardIndex][0]);
       encounterCardIndex++;
    } else if (x === 4 && gameCardIndex < combatCardArr.length) {
        combatCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 5 && encounterCardIndex < encounterCardArr.length) {
        combatCard(encounterCardArr[encounterCardIndex][0]);
        encounterCardIndex++;
    } else if (x === 6 && gameCardIndex < gameCards.length) {
        combatCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x >= 7 && bossCardRun === false && bossCardIndex < bossCardArr.length) {
        bossCardRun = true;
        combatCard(bossCardArr[bossCardIndex][0]);
    } else if (x >= 7 && bossCardRun === true) {
        if (mainText.textContent.includes("balrog")) {
        bossDisplayText(bossCardOneSecondaryData[0]);
        } else if (mainText.textContent.includes("wizard")) {
        bossDisplayText(bossCardTwoSecondaryData[0])
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

let currentCombatCard = null;

function combatCard(displayCardData){
    currentCombatCard = displayCardData;
    hideContinue();
    imageHeader.innerHTML = displayCardData.imageHeader;
    mainText.innerHTML = displayCardData.mainText;
    buttonA.innerText = displayCardData.buttonAText;
    buttonB.innerText = displayCardData.buttonBText;
    buttonC.innerText = displayCardData.buttonCText;


arrBtns.forEach(button  => {
    button.addEventListener("click", function() {
        if (button === buttonA) {
            console.log("displayCardData:", currentCombatCard);
                displayText(currentCombatCard.buttonDisplayTextA);
                buttonToggle();
        } else if (button === buttonB) {
                displayText(currentCombatCard.buttonDisplayTextB);
                buttonToggle();
        } else if (button === buttonC) {
                displayText(currentCombatCard.buttonDisplayTextC);
                buttonToggle();
        };
    });
});
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
function displayText(argument){
// Game start function
    if(argument === "gameStartResultA"){
        imageHeader.innerHTML = gameStartData[0].imageHeader;
        mainText.innerHTML =  gameStartData[0].mainText;
    } else if (argument === "gameStartResultB") {
        imageHeader.innerHTML = gameStartData[1].imageHeader;
        mainText.innerHTML = gameStartData[1].mainText;
        healthAdjust(-2);
    } else if (argument === "gameStartResultC") {
        imageHeader.innerHTML = gameStartData[2].imageHeader;
        mainText.innerHTML = gameStartData[2].mainText;
    };
// Combat card section. These ifs provide the data for each combatCard function
    if(argument === "combatCardOneResultA"){
        imageHeader.innerHTML = combatCardOneData[1].imageHeader;
        mainText.innerHTML = combatCardOneData[1].mainText;
        healthAdjust(-2);
            } else if(argument === "combatCardOneResultB"){
        imageHeader.innerHTML = combatCardOneData[2].imageHeader;
        mainText.innerHTML = combatCardOneData[2].mainText;
        healthAdjust(-1);
            } else if(argument === "combatCardOneResultC"){
        imageHeader.innerHTML = combatCardOneData[3].imageHeader;
        mainText.innerHTML = combatCardOneData[3].mainText;
        healthAdjust(0);
            }; 
    if (argument === "combatCardTwoResultA") {
        imageHeader.innerHTML = combatCardTwoData[1].imageHeader;
        mainText.innerHTML = combatCardTwoData[1].mainText;
        healthAdjust(0);
    }       else if (argument === "combatCardTwoResultB") {
        imageHeader.innerHTML = combatCardTwoData[2].imageHeader;
        mainText.innerHTML = combatCardTwoData[2].mainText;
        healthAdjust(-1);
    }       else if (argument === "combatCardTwoResultC") {
        imageHeader.innerHTML = combatCardTwoData[3].imageHeader;
        mainText.innerHTML = combatCardTwoData[3].mainText;
        healthAdjust(0);
        };  
    if (argument === "combatCardThreeResultA") {
        imageHeader.innerHTML = combatCardThreeData[1].imageHeader;
        mainText.innerHTML = combatCardThreeData[1].mainText;
        healthAdjust(0);
    }       else if (argument === "combatCardThreeResultB") {
        imageHeader.innerHTML = combatCardThreeData[2].imageHeader;
        mainText.innerHTML = combatCardThreeData[2].mainText;
        healthAdjust(-1);
    }       else if (argument === "combatCardThreeResultC") {
        imageHeader.innerHTML = combatCardThreeData[3].imageHeader;
        mainText.innerHTML = combatCardThreeData[3].mainText;
        healthAdjust(0);
        };
    if (argument === "combatCardFourResultA") {
        imageHeader.innerHTML = combatCardFourData[1].imageHeader;
        mainText.innerHTML = combatCardFourData[1].mainText;
        healthAdjust(2);
    } else if (argument === "combatCardFourResultB") {
        imageHeader.innerHTML = combatCardFourData[2].imageHeader;
        mainText.innerHTML = combatCardFourData[2].mainText;
        healthAdjust(0);
    } else if (argument === "combatCardFourResultC") {
        imageHeader.innerHTML = combatCardFourData[3].imageHeader;
        mainText.innerHTML = combatCardFourData[3].mainText;
        healthAdjust(-2);
    };
        if (argument === "combatCardFiveResultA") {
        imageHeader.innerHTML = combatCardFiveData[1].imageHeader;
        mainText.innerHTML = combatCardFiveData[1].mainText;
        healthAdjust(-1); 
    } else if (argument === "combatCardFiveResultB") {
        imageHeader.innerHTML = combatCardFiveData[2].imageHeader;
        mainText.innerHTML = combatCardFiveData[2].mainText;
        healthAdjust(0);
    } else if (argument === "combatCardFiveResultC") {
        imageHeader.innerHTML = combatCardFiveData[3].imageHeader;
        mainText.innerHTML = combatCardFiveData[3].mainText;
        healthAdjust(1);
    };
// Encounter cards section. These ifs provide the data for each encounterCard function
    if (argument === "encounterCardOneResultA") {
        imageHeader.innerHTML = encounterCardOneData[1].imageHeader;
        mainText.innerHTML = encounterCardOneData[1].mainText;
        healthAdjust(1);
    }   else if (argument === "encounterCardOneResultB") {
        imageHeader.innerHTML = encounterCardOneData[2].imageHeader;
        mainText.innerHTML = encounterCardOneData[2].mainText;
        healthAdjust(2);
    }   else if (argument === "encounterCardOneResultC") {
        imageHeader.innerHTML = encounterCardOneData[3].imageHeader;
        mainText.innerHTML = encounterCardOneData[3].mainText;
        healthAdjust(0);
    };
    if (argument === "encounterCardTwoResultA") {
        imageHeader.innerHTML = encounterCardTwoData[1].imageHeader;
        mainText.innerHTML = encounterCardTwoData[1].mainText;
        healthAdjust(2);
    }   else if (argument === "encounterCardTwoResultB") {
        imageHeader.innerHTML = encounterCardTwoData[2].imageHeader;
        mainText.innerHTML = encounterCardTwoData[2].mainText;
        healthAdjust(-2);
    }   else if (argument === "encounterCardTwoResultC") {
        imageHeader.innerHTML = encounterCardTwoData[3].imageHeader;
        mainText.innerHTML = encounterCardTwoData[3].mainText;
        healthAdjust(0);
    };
    if (argument === "encounterCardThreeResultA") {
        imageHeader.innerHTML = encounterCardThreeData[1].imageHeader;
        mainText.innerHTML = encounterCardThreeData[1].mainText;
        healthAdjust(0);
    } else if (argument === "encounterCardThreeResultB") {
        imageHeader.innerHTML = encounterCardThreeData[2].imageHeader;
        mainText.innerHTML = encounterCardThreeData[2].mainText;
        healthAdjust(0);
    } else if ( argument === "encounterCardThreeResultC") {
        imageHeader.innerHTML = encounterCardThreeData[3].imageHeader;
        mainText.innerHTML = encounterCardThreeData[3].mainText;
        healthAdjust(0);
    };
// Boss cards section. These ifs provide the data for each bossCard function
    if (argument === "bossCardOneResultA") {
        imageHeader.innerHTML = bossCardOneData[1].imageHeader;
        mainText.innerHTML = bossCardOneData[1].mainText;
        healthAdjust(-3);
    } else if (argument === "bossCardOneResultB") {
        imageHeader.innerHTML = bossCardOneData[2].imageHeader;
        mainText.innerHTML = bossCardOneData[2].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardOneResultC") {
        imageHeader.innerHTML = bossCardOneData[3].imageHeader;
        mainText.innerHTML = bossCardOneData[3].mainText;
        healthAdjust(0);
    };
    if (argument === "bossCardTwoResultA") {
        imageHeader.innerHTML = bossCardTwoData[1].imageHeader;
        mainText.innerHTML = bossCardTwoData[1].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardTwoResultB") {
        imageHeader.innerHTML = bossCardTwoData[2].imageHeader;
        mainText.innerHTML = bossCardTwoData[2].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardTwoResultC") {
        imageHeader.innerHTML = bossCardTwoData[3].imageHeader;
        mainText.innerHTML = bossCardTwoData[3].mainText;
        healthAdjust(0);
    };
    buttonToggle();
    showContinue(nextLevel);
};
// Use this function for the second boss card, to set up the end of the game.
function bossDisplayText(argument) {
    if (argument === "bossCardOneSecondaryResultA") {
        imageHeader.innerHTML = bossCardOneSecondaryData[1].imageHeader;
        mainText.innerHTML = bossCardOneSecondaryData[1].mainText;
        healthAdjust(-4);
    } else if (argument === "bossCardOneSecondaryResultB") {
        imageHeader.innerHTML = bossCardOneSecondaryData[2].imageHeader;
        mainText.innerHTML = bossCardOneSecondaryData[2].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardOneSecondaryResultC") {
        imageHeader.innerHTML = bossCardOneSecondaryData[3].imageHeader;
        mainText.innerHTML = bossCardOneSecondaryData[3].mainText;
        healthAdjust(-6);
    };
    if (argument === "bossCardTwoSecondaryResultA") {
        imageHeader.innerHTML = bossCardTwoSecondaryData[1].imageHeader;
        mainText.innerHTML = bossCardTwoSecondaryData[1].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardTwoSecondaryResultB") {
        imageHeader.innerHTML = bossCardTwoSecondaryData[2].imageHeader;
        mainText.innerHTML = bossCardTwoSecondaryData[2].mainText;
        healthAdjust(0);
    } else if (argument === "bossCardTwoSecondaryResultC") {
        imageHeader.innerHTML = bossCardTwoSecondaryData[3].imageHeader;
        mainText.innerHTML = bossCardTwoSecondaryData[3].mainText;
        healthAdjust(0);
    };
    if (health > 0) {
        showContinue(gameWin);
} else if (health = 0) {
        showContinue(gameOver);
};
};
});

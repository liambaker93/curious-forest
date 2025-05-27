// Various game function consts
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

var health = 6;
let healthAdjustValue = 0;
let maxHealth = 6;
let minHealth = 0;

// bossCardRun is used to show the player is in the boss stage, as the boss stage carries two seperate 'levels', the game needs to know that the boss has been activated.

let bossCardRun = false;

// x is used to cycle through levels, the above randomisers are used to pick which level is displayed to the player.

var x = 0;

// healthAdjust is used throughout the levels to adjust the health of the player depending on their actions.

function healthAdjust(healthAdjustValue) {
    health = health + healthAdjustValue;

    health = Math.min(health, maxHealth); //Stops the health going over the maximum health points selected
    health = Math.max(health, minHealth); // Stops the health going below 0

};

// Next level function used after all result cards

function nextLevel() {
    ++x;
    checkHealth();
    hideContinue();
    console.log("level", x);
    if (x === 1) {
        combatCard(gameStartData[0]);
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
    } else if (x === 6 && gameCardIndex < combatCardArr.length) {
        combatCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 7 && bossCardRun === false && bossCardIndex < bossCardArr.length) {
        bossCardRun = true;
        combatCard(bossCardArr[bossCardIndex][0]);
    } else if (x === 8 && bossCardRun === true) {
        if (currentCombatCard == bossCardArr[0][0]) {
        combatCard(bossCardSecArr[0][0]);
        } else if (currentCombatCard == bossCardArr[1][0]) {
        combatCard(bossCardSecArr[1][0]);
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
    buttonToggle();
    hideContinue();
    healthAdjustValue = 0;
    imageHeader.innerHTML = displayCardData.imageHeader;
    mainText.innerHTML = displayCardData.mainText;
    buttonA.innerText = displayCardData.buttonAText;
    buttonB.innerText = displayCardData.buttonBText;
    buttonC.innerText = displayCardData.buttonCText;
};

arrBtns.forEach(button  => {
    button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText(currentCombatCard.buttonDisplayTextA);
        } else if (button === buttonB) {
                displayText(currentCombatCard.buttonDisplayTextB);
        } else if (button === buttonC) {
                displayText(currentCombatCard.buttonDisplayTextC);
        };
    });
});

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

function buttonHide() {
    buttonA.classList.add("hidden");
    buttonB.classList.add("hidden");
    buttonC.classList.add("hidden");
};

function showContinue(level) {
    buttonHide();
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
    console.log("health:", health);
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
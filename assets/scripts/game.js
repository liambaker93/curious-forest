// Various game function consts
const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonContinue = document.getElementById("button-continue");

const instructionsPrompt = document.getElementById("instructions-prompt");
const instructionsText = document.getElementById("instructionsReadBlock");

const pubReturnButton = document.getElementById("pub-return");

const arrBtns = [buttonA, buttonB, buttonC];

// These arrays are used to shuffle which cards will be displayed creating a randomness to the game everytime the player clicks start.

shuffleCards(combatCardArr);
let gameCardIndex = 0;

shuffleCards(bossCardArr);
let bossCardIndex = 0;
let bossCardSecIndex = 0;

shuffleCards(encounterCardArr);
let encounterCardIndex = 0;

// max and min health points can be used to vary difficulty in later development, assigning them now means that they have been worked into the code already.

var health = 6;
let healthAdjustValue = 0;
let maxHealth = 6;
let minHealth = 0;

// instructionsRead is used to check if the player has read the instructions on the homepage

let instructionsRead = false

// This section handles if the instructions have been read or not

function readInstructions() {
    instructionsRead = true
}

function instructionsFormValidate() {
    let instructionsVerify = document.forms["instructions-read"]["instructions-check"].value;
    if (instructionsVerify.toLowerCase() == "") {
        instructionsText.innerText = "Please read the instructions first- then type yes!";
        return false;
    } else if (instructionsVerify.toLowerCase() == "yes" && instructionsRead === false) {
        instructionsText.innerText = "Please go read the instructions- don't just say yes!";
    } else if (instructionsVerify.toLowerCase() !== "yes") {
        instructionsText.innerText = "Type Yes, don't type anything else!";
    } else if (instructionsVerify.toLowerCase() == "yes" && instructionsRead === true) {
        pubReturnButton.click();
        nextLevel();
        checkHealth();
    }
}

// x is used to cycle through levels, the above randomisers are used to pick which level is displayed to the player.

var x = 0;
let maxLevel = 9;
x = Math.min(x, maxLevel);

// healthAdjust is used throughout the levels to adjust the health of the player depending on their actions.

function healthAdjust(healthAdjustValue) {
    health = health + healthAdjustValue; // The healthAdjustValue is called after a user clicks one of the selections.

    health = Math.min(health, maxHealth); //Stops the health going over the maximum health points selected
    health = Math.max(health, minHealth); // Stops the health going below 0

};



// Shuffle function for picking which cards will be used
// Through googling via gemini found the Fisher-Yates shuffle method, and managed to implement it and verify with Gemini. Further links and info in the readme
function shuffleCards(array) { //The array parameter is used to cycle through each type of card displayed to the user.
    for (let n = array.length - 1; n > 0; n--) { 
        const j = Math.floor(Math.random() * (n + 1));
        [array[n], array[j]] = [array[j], array[n]];
    }
};

// Game card function which handles how the game cards are displayed to the user. 

let currentGameCard = null; // This sets up an object to then be passed through as a parameter into the gameCard function.

function gameCard(displayCardData){  //This parameter lets me specify which card I want to display to the user
    currentGameCard = displayCardData; //The displayCardData object is the card selected, this then equals the currentGameCard object to allow me to use it within the global button event listener.
    buttonToggle();
    hideContinue();
    healthAdjustValue = 0; // Resets the healthAdjustValue to 0 to avoid any possible repetitions of adjustments from prior button clicks.
    imageHeader.innerHTML = displayCardData.imageHeader;
    mainText.innerHTML = displayCardData.mainText;
    buttonA.innerText = displayCardData.buttonAText;
    buttonB.innerText = displayCardData.buttonBText;
    buttonC.innerText = displayCardData.buttonCText;
};

arrBtns.forEach(button  => {
    button.addEventListener("click", function() {
            if (button === buttonA) {
                displayText(currentGameCard.buttonDisplayTextA);
        } else if (button === buttonB) {
                displayText(currentGameCard.buttonDisplayTextB);
        } else if (button === buttonC) {
                displayText(currentGameCard.buttonDisplayTextC);
        };
    });
});

function gameEnd() {
    if (health > 0) {
        showContinue(gameWin);
    } else if (health === 0) {
        showContinue(gameOver);
    };
};

// This function runs if your health reaches 0. Currently a copy of the code that runs when there are no more cards to show the player.
function gameOver() {
    arrBtns.forEach(button => { //This if will run through the buttons to check if they need to be hidden or not
        if (!button.classList.contains("hidden")) {
            button.classList.add("hidden")
        };
    });
    if (mainText.textContent.includes("balrog")) {
        imageHeader.innerHTML = "<img src='assets/images/game-over-balrog.png' alt='Player dead at the feet of a balrog'>";
        mainText.innerHTML = "<p>Unfortunately the Balrog has bested you. Return to the pub and try again- better luck next time!</p>";
    } else if (mainText.textContent.includes("wizard")) {
        imageHeader.innerHTML = "<img src='assets/images/game-over-wizard.png' alt='Player dead at the feet of a wizard'>";
        mainText.innerHTML = "<p>It seems the Wizard won this duel. You can always return to the pub and have another go..Good luck.</p>";
    } else {
    mainText.innerHTML = "<p>Unfortunately you have been bested...this time! Return to the pub and try your luck again!</p>";
    imageHeader.innerHTML = "<img src='assets/images/game-over-generic.png' alt='The player dead on the floor of the forest'>";
    };
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
    if (mainText.textContent.includes("balrog")) {
        mainText.innerHTML = "<p>Well done! You beat the adventure, and scored a prize. Dare you try your luck again?</p>";
        imageHeader.innerHTML = "<img src='assets/images/boss-card-one-win.png' alt='Warrior stood atop a balrog'>";
    } else if (mainText.textContent.includes("wizard")) {
        mainText.innerHTML = "<p>Well done! You beat the adventure, and scored a prize. Dare you try your luck again?</p>";
        imageHeader.innerHTML = "<img src='assets/images/boss-card-two-win.png' alt='Armoured warrior standing in a forest'>";
    }; 
    buttonContinue.innerText = "Return to the pub";
    buttonContinue.addEventListener("click", function() {
        window.location.reload();
});
};

// The nextLevel function uses x as a turn counter to implement cards throughout the game. 
// Using the shuffled cards and pulling those indexes from the relevant Arrays.
// This info is then displayed to the user.
// All of the data is stored and pulled from the datasets.js file to aid readability.
// If extra levels are to be added, then adding the data into the relevant array will automatically
// add them into the level selection within the nextLevel function.

function nextLevel() {
    ++x;
    hideContinue();
    console.log("level", x);
    if (x === 1) {
        gameCard(gameStartData[0]);
    } else if (x === 2) {
        gameCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 3 && encounterCardIndex < encounterCardArr.length) {
       gameCard(encounterCardArr[encounterCardIndex][0]);
       encounterCardIndex++;
    } else if (x === 4 && gameCardIndex < combatCardArr.length) {
        gameCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 5 && encounterCardIndex < encounterCardArr.length) {
        gameCard(encounterCardArr[encounterCardIndex][0]);
        encounterCardIndex++;
    } else if (x === 6 && gameCardIndex < combatCardArr.length) {
        gameCard(combatCardArr[gameCardIndex][0]);
        gameCardIndex++;
    } else if (x === 7 && bossCardIndex < bossCardArr.length) {
        gameCard(bossCardArr[bossCardIndex][bossCardSecIndex]);
    } else if (x === 8) {
        if (mainText.textContent.includes("balrog")) {
            gameCard(bossCardSecArr[0][0]);
        } else if (mainText.textContent.includes("wizard")) {
            gameCard(bossCardSecArr[1][0]);
        };
    } else if (x > 8){
        gameEnd();
    }
    else {
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
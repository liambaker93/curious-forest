
// This function will be the first one used when the user opts to start a new game //
function gameStart() {
      imageHeader.innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
      mainText.innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; 
      buttonShow();
}

// This element will display a button for the user to select their option on each card //
// This function removes the hidden class from the selection buttons

function buttonShow() {
    document.getElementById("button-a").classList.remove("hidden");
    document.getElementById("button-b").classList.remove("hidden");
    document.getElementById("button-c").classList.remove("hidden");
}

// This section contains the images needed for each kind of level

const combatImageSources = ["assets/images/combat-card-one"];

// Image const

const imageHeader = document.getElementById("image-header");
const mainText = document.getElementById("main-text");
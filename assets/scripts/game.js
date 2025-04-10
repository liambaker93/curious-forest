
// This function will be the first one used when the user opts to start a new game //
function newGame() {
    document.getElementById("image-header").innerHTML = 
    "<img src='assets/images/fantasy-pub.png' alt='A fantasy pub open with people sat drinking and a barmaid serving.'>";
    document.getElementById("main-text").innerHTML = "<p>You walk up to a pub and see two tables full of people laughing, sharing stories. One man sits on a stool in front of the bar and watches you wander towards the bar. What do you do?</p>"; // Fixed missing closing tag
    let buttonA = document.getElementById("button-a");

    // Check if buttonA is not null before trying to modify its class
    if (buttonA) {
        buttonA.classList.remove("hidden"); // Remove the "hidden" class if the buttonA exists
    } else {
        console.error("Button element with ID 'button-a' not found.");
    }
} // line 7

// This element will display a button for the user to select their option on each card //

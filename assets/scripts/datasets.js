
combatCardOneData = [
{
    imageHeader: "<img src='assets/images/combat-card-one-result-a.png' alt='The beast angrily charges out from the bush towards you, a paw raised to attack.'>",
    mainText: "<p>You swing at the beast and as your arm reaches around it swipes at you with it's claws and cuts your chest. You recoil back and it runs away into the darkness</p>",
},
{
    imageHeader: "<img src='assets/images/combat-card-one-result-b.png' alt='The beast with a cut leg walking away, turning it's head to look at the viewer'>",
    mainText: "<p>You make a defensive stance against the beast, it swipes at you but you block it with your hand, and it's palm hits you. You take a swipe at it and cut it's right leg deep, causing it to run away<p>",
},
{
    imageHeader: "<img src='assets/images/combat-card-one-result-c.png' alt='The beast backs into a bush, staring at the viewer'>",
    mainText: "<p>You step backwards gently away from the beast, holding your hands up to show you're no threat. It ducks it's head and backs into the hedgeline, disappearing from view</p>",
}
]

combatCardTwoData = [
    {
        imageHeader: "<img src='assets/images/combat-card-two-result-a.png' alt='The bandits sit around a campfire, paying no attention to the viewer.'>",
        mainText: "<p>They continue sitting and talking around the campfire, none the wiser to your slinking steps beyond them</p>",
    },
    {
        imageHeader: "<img src='assets/images/combat-card-two-result-b.png' alt='A bandit holds himself against a pillar with a drawn sword coming towards the viewer'>",
        mainText: "<p>You bolt it towards the campfire, they hear you coming and just as you're about to run straight through the fire, one of the nudges you off course. You stumble past the fire, your right foot landing in the burning ash, and you limp away into the darkness</p>"
    },
    {
        imageHeader: "<img src='assets/images/combat-card-two-result-c.png' alt='The outside enclave of an abandoned monastary, covered in moss'>",
        mainText: "<p>You count the number of bandits on your fingers and decide that actually this isn't a fight worth having, and leave the monastery the way you came in</p>",
    }
]


function displayText(argument){
        if(argument === "combatCardOneResultA"){
        imageHeader.innerHTML = combatCardOneData[0].imageHeader;
        mainText.innerHTML = combatCardOneData[0].mainText;
        console.log("Shows card number 1")
            } else if(argument === "combatCardOneResultB"){
        imageHeader.innerHTML = combatCardOneData[1].imageHeader;
        mainText.innerHTML = combatCardOneData[1].mainText;
            } else if(argument === "combatCardOneResultC"){
        imageHeader.innerHTML = combatCardOneData[2].imageHeader;
        mainText.innerHTML = combatCardOneData[2].mainText;
            } 
         if (argument === "combatCardTwoResultA") {
        imageHeader.innerHTML = combatCardTwoData[0].imageHeader;
        mainText.innerHTML = combatCardTwoData[0].mainText;
    }       else if (argument === "combatCardTwoResultB") {
        imageHeader.innerHTML = combatCardTwoData[1].imageHeader;
        mainText.innerHTML = combatCardTwoData[1].mainText;
    }       else if (argument === "combatCardTwoResultC") {
        imageHeader.innerHTML = combatCardTwoData[2].imageHeader;
        mainText.innerHTML = combatCardTwoData[2].mainText;
    } ;
    showContinue();

}

    const arrBtns = [
        {
            btnA: buttonA,
            btnB: buttonB,
            btnC: buttonC,
        },
     ]

    //arrBtns.forEach(btn  => btn.addEventListener("click", btn) )



// This file holds the data used in the main game.js script to avoid cluttering there.
/**
 * A global function is underneath all of the datasets to pull the data needed per each
 * game card.
 */
gameStartData = [
    {
        imageHeader: "<img src='assets/images/result-card-one.png' alt='A man standing by a bar is handing you a full pint of beer'>",
        mainText: "<p>He hands the drink over to you and tells you a tale of an evening where he brawled a bar full of drunkards just to save one newcomer from ending the night thrown out into a haybale. He sways and falls backwards onto his stool, passing out before finishing the story. You drink the beer and feel a spring in your step.<p>",
    },
    {
        imageHeader: "<img src='assets/images/result-card-two.png' alt='A man covered in beer, standing ready to fight against a bar'>",
        mainText: "<p>You pour the beer over him. He quickly turns from intrigued to annoyed at your arrival and bares his fists ready to fight, and swings his arm straight into your jaw, knocking you back on to the ground</p>",
    },
    {
        imageHeader: "<img src='assets/images/result-card-three.png' alt='The outisde of a pub with the interior and streetlamps on'>",
        mainText: "<p>You reject the drink and turn around, leaving the pub. No one pays any attention as you leave and they all get back to their lives. You leave the town and venture into the nearby forest</p>'",
    },
]

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

combatCardThreeData = [
    {
        imageHeader: "<img src='assets/images/combat-card-three-result-a.png' alt='A fox staring at the viewer with a dog in it's mouth'>",
        mainText: "<p>The fox stares you up and down and slowly bows it's head, gripping the dog with it's teeth and dragging it away into a nearby foxhole</p>",
    },
    {
        imageHeader: "<img src='assets/images/combat-card-three-result-b.png' alt='The fox is off in the distance, two dogs laying dead on the forest floor'>",
        mainText: "<p>You drop your hands to the ground and start growling at the fox. The fox yaps back at you and starts to circle you. After completing a full rotation, it bolts underneath you and between your legs causing you to fly up and land on your back, the smell of dead dog in the air</p>",
    },
    {
        imageHeader: "<img src='assets/images/combat-card-three-result-c.png' alt='The fox looks down at a dead dog on the forest floor'>",
        mainText: "<p>You tip toe around the fox not dropping eye contact, and once you're on the opposite side to where you started, you begin to slowly back away until it becomes uninterested and continues investigating it's dinner</p>",
    }

]

combatCardFourData = [
    {
        imageHeader:"",
        mainText: "",
    },
    {
        imageHeader:"",
        mainText:"",
    },
    {
        imageHeader:"",
        mainText:"",
    }
]

combatCardFiveData = [
    {
        imageHeader: "",
        mainText: "",
    },
    {
        imageHeader:"",
        mainText:"",
    },
    {
        imageHeader:"",
        mainText:"",
    }
]

encounterCardOneData = [
    {
        imageHeader:"<img src='assets/images/encounter-card-one-result-a.png' alt='Mechant handing over a small potion vial'",
        mainText:"<p>'Yes I do!' He hands over a small vial 'This will provide you a slight boost to your vitality'</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-one-result-b.png' alt='Merchant handing a big, heavy vial over to the player'>",
        mainText:"<p>'Oh that I have!' He reaches into the cart and pulls out a big vial full of a glowing potion. 'If you drink this you will feel as amazing as you ever have!'</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-one-result-c.png' alt='Merchant pushing a cart through a forest'>",
        mainText:"<p>'That's a shame. Good luck with your adventure.' He walks into the distance, pulling his cart behind him.</p>",
    }
]

encounterCardTwoData = [
    {
        imageHeader:"",
        mainText:"",
    },
    {
        imageHeader:"",
        mainText:"",
    },
    {
        imageHeader:"",
        mainText:"",
    }
]


function displayText(argument){
    if(argument === "combatCardOneResultA"){
        imageHeader.innerHTML = combatCardOneData[0].imageHeader;
        mainText.innerHTML = combatCardOneData[0].mainText;
            } else if(argument === "combatCardOneResultB"){
        imageHeader.innerHTML = combatCardOneData[1].imageHeader;
        mainText.innerHTML = combatCardOneData[1].mainText;
            } else if(argument === "combatCardOneResultC"){
        imageHeader.innerHTML = combatCardOneData[2].imageHeader;
        mainText.innerHTML = combatCardOneData[2].mainText;
            }; 
    if (argument === "combatCardTwoResultA") {
        imageHeader.innerHTML = combatCardTwoData[0].imageHeader;
        mainText.innerHTML = combatCardTwoData[0].mainText;
    }       else if (argument === "combatCardTwoResultB") {
        imageHeader.innerHTML = combatCardTwoData[1].imageHeader;
        mainText.innerHTML = combatCardTwoData[1].mainText;
    }       else if (argument === "combatCardTwoResultC") {
        imageHeader.innerHTML = combatCardTwoData[2].imageHeader;
        mainText.innerHTML = combatCardTwoData[2].mainText;
        };  
    if (argument === "combatCardThreeResultA") {
        imageHeader.innerHTML = combatCardThreeData[0].imageHeader;
        mainText.innerHTML = combatCardThreeData[0].mainText;
    }       else if (argument === "combatCardThreeResultB") {
        imageHeader.innerHTML = combatCardThreeData[1].imageHeader;
        mainText.innerHTML = combatCardThreeData[1].mainText;
    }       else if (argument === "combatCardThreeResultC") {
        imageHeader.innerHTML = combatCardThreeData[2].imageHeader;
        mainText.innerHTML = combatCardThreeData[2].mainText;
        };
    if (argument === "encounterCardOneResultA") {
        imageHeader.innerHTML = encounterCardOneData[0].imageHeader;
        mainText.innerHTML = encounterCardOneData[0].mainText;
    }   else if (argument === "encounterCardOneResultB") {
        imageHeader.innerHTML = encounterCardOneData[1].imageHeader;
        mainText.innerHTML = encounterCardOneData[1].mainText;
    }   else if (argument === "encounterCardOneResultC") {
        imageHeader.innerHTML = encounterCardOneData[2].imageHeader;
        mainText.innerHTML = encounterCardOneData[2].mainText;
    }
    buttonToggle();
    showContinue();
};


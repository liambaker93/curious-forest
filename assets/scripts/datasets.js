// This file holds the data used in the main game.js script to avoid cluttering there.
/**
 * A global function is underneath all of the datasets to pull the data needed per each
 * game card.
 */
document.addEventListener("DOMContentLoaded", function() {


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
];


let combatCardOneData = [
{
    imageHeader: "<img src='assets/images/combat-card-one.png' alt='A beast emerging from the hedgeline'>",
    mainText: "<p>A beast emerges from the hedges and snarls at you, teeth bared and saliva dripping from it's mouth. What do you do?</p>",
    buttonAText: "Draw your sword and take a swing",
    buttonBText: "Draw your sword ready to defend",
    buttonCText: "Slowly back away",
    buttonDisplayTextA: "combatCardOneResultA",
    buttonDisplayTextB: "combatCardOneResultB",
    buttonDisplayTextC: "combatCardOneResultC",
},
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
},
];

let combatCardTwoData = [
    {
        imageHeader: "<img src='assets/images/combat-card-two.png' alt='A group of bandits sat around a campfire, their backs to you'></img>",
        mainText: "<p>You walk into a monastery that has been long since abandoned. Walking through it you see nothing but ruins and torn tapestry. Out the other end you spy a campfire surrounded by four bandits. What do you do?</p>",
        buttonAText: "Sneak around them",
        buttonBText: "Run through the group",
        buttonCText: "Walk back the way you came",
        buttonDisplayTextA: "combatCardTwoResultA",
        buttonDisplayTextB: "combatCardTwoResultB",
        buttonDisplayTextC: "combatCardTwoResultC",
    },
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
];

let combatCardThreeData = [
    {
        imageHeader: "<img src='assets/images/combat-card-three.png' alt='An angry fox stands over the corpse of a dog, growling at you'>",
        mainText: "<p>You step deeper into the forest and hear a mix of growling and whining and then suddenly a whimper. Upon investigating, you find an aggressive looking fox stood over the body of a dead dog. What do you do?</p>",
        buttonAText: "Take an aggressive stance",
        buttonBText: "Drop to all fours and mimic the fox",
        buttonCText: "Keep facing it and walk around it to get past",
        buttonDisplayTextA: "combatCardThreeResultA",
        buttonDisplayTextB: "combatCardThreeResultB",
        buttonDisplayTextC: "combatCardThreeResultC",
    },
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

];

let combatCardFourData = [
    {
        imageHeader: "<img src='assets/images/combat-card-four.png' alt='An archer standing in a tree holding a bow and arrow'>",
        mainText: "<p>Walking through the forest, you walk upon an archer hiding in a treetop, pointing his arrow straight at you.</p>",
        buttonAText: "You ask him for directions",
        buttonBText: "Threaten him",
        buttonCText: "Declare yourself powerful",
        buttonDisplayTextA: "combatCardFourResultA",
        buttonDisplayTextB: "combatCardFourResultB",
        buttonDisplayTextC: "combatCardFourResultC",
    },
    {
        imageHeader:"<img src='assets/images/combat-card-four-result-a.png' alt='Archer holding on to a tree branch'>",
        mainText: "<p>You see the archer and ask for directions around the forest. 'Ah! An adventurer, here's a health potion if you need it. North takes you out of the forest the quickest, east will take you to the river Cairm. West will lead you to an old cave, and south takes you to an enclosure mainly used by bears. Tread carefully'</p>",
    },
    {
        imageHeader:"<img src='assets/images/combat-card-four-result-b.png' alt='Archer hanging from a branch above the ground'>",
        mainText:"<p>'Don't worry, I trust your prowess, I can see the battle scarred look in your eye. Tread carefully in these woods.' He hangs from a branch of the tree, and swings himself up further the treeline and disappears from sight.</p>",
    },
    {
        imageHeader:"<img src='assets/images/combat-card-four-result-c.png' alt='Archer drawing his bow'>",
        mainText:"<p>'You think yourself the terror of these woods? Be gone with you adventurer!' He shoots an arrow towards you, piercing the armour around your shoulder blade, then flees into the trees.</p>",
    }
];

let combatCardFiveData = [
    {
        imageHeader: "<img src='assets/images/combat-card-five.png' alt='A bear standing in a lake'>",
        mainText: "<p>You follow the sound of a lake and find a bear calmly drinking from it. You break a tree branch on the ground and it darts it's head around to stare directly at you. What do you do?</p>",
        buttonAText: "Draw your sword and threaten it",
        buttonBText: "Stare at it and stand your ground",
        buttonCText: "Pet the bear",
        buttonDisplayTextA: "combatCardFiveResultA",
        buttonDisplayTextB: "combatCardFiveResultB",
        buttonDisplayTextC: "combatCardFiveResultC",
    },
    {
        imageHeader: "<img src='assets/images/combat-card-five-result-a.png' alt='A bear charging towards the viewer'>",
        mainText: "<p>The bear meets your challenge and charges out of the river towards you. You hold your sword forward and it darts aside from it to bite into your arm. You manage to slice it's neck, and cut an artery, dropping it to the ground.</p>",
    },
    {
        imageHeader:"<img src='assets/images/combat-card-five-result-b.png' alt='A bear walking away from the viewer'>",
        mainText:"<p>You stamp your feet into the ground, one after the other. The bear sees this, and respects your presence, deciding not to engage and leaves you to enjoy the river alone.</p>",
    },
    {
        imageHeader:"<img src='assets/images/combat-card-five-result-c.png' alt='A bear sleeping by a river'>",
        mainText:"<p>You step slowly towards the bear, taking a gamble on it's temperament. You stroke the bear behind it's ear, and it slowly starts to drop to the ground, falling asleep. You step past it and take a sip from the river, feeling it affect your vitality.</p>",
    }
];


let encounterCardOneData = [
    {
        imageHeader: "<img src='assets/images/encounter-card-one.png' alt='A merchant pulling a cart through a forest'>",
        mainText: "<p>Wandering through the forest, you stumble upon a merchant. He's pulling his wares and stops you, looking you up and down. 'Adventurer, what can I offer you?'</p>",
        buttonAText: "Have a health potion?",
        buttonBText: "Carrying any superior health potions?",
        buttonCText: "I'm alright thank you, I don't need anything.",
        buttonDisplayTextA: "encounterCardOneResultA",
        buttonDisplayTextB: "encounterCardOneResultB",
        buttonDisplayTextC: "encounterCardOneResultC",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-one-result-a.png' alt='Mechant handing over a small potion vial'>",
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
];

let encounterCardTwoData = [
    {
        imageHeader: "<img src='assets/images/encounter-card-two.png' alt='A gnome sat on a mushroom'>",
        mainText: "<p>You walk over a log and step into a field of mushrooms, all glowing different colours. You hear a snigger as a gnome reaches up and leaps up atop one. 'You look weary. One of these mushrooms will help you with that, I'm afraid I just can't remember which one...'What do you do?</p>",
        buttonAText: "Try a purple mushroom",
        buttonBText: "Try the red mushroom",
        buttonCText: "Decline the offer",
        buttonDisplayTextA: "encounterCardTwoResultA",
        buttonDisplayTextB: "encounterCardTwoResultB",
        buttonDisplayTextC: "encounterCardTwoResultC",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-two-result-a.png' alt='Purple mushroom shrivelled on the ground in front of the gnome'>",
        mainText:"<p>'Ah! I thought the purple one would mean good news, you're looking healthier already!' You eat the mushroom and feel revitalised.</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-two-result-b.png' alt='A gnome crying sat underneath a rotting mushroom'>",
        mainText:"<p>'Oh dear, the mushrooms...The rot is spreading between them! This is no good...' You eat the wrong mushroom, and feel it wreak havoc with your insides</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-two-result-c.png' alt='The gnome waves goodbye'>",
        mainText:"<p>'Goodbye traveller, see you soon!' You past the gnome, and he spins around on the mushroom to face you and wave, before leaping back underneath it</p>'",
    }
];

let encounterCardThreeData = [
    {
        imageHeader: "<img src='assets/images/encounter-card-three.png' alt='A squirrel sitting on a branch holding an acorn'>",
        mainText: "<p>You walk underneath a set of trees with perfect, interlocking branches. On top of the one of the branches is a squirrel, holding an acorn tightly. Slowly it scampers down the tree to the trunk. What do you do?</p>",
        buttonAText: "Reach out to the squirrel",
        buttonBText: "Watch and wait",
        buttonCText: "Step towards the squirrel",
        buttonDisplayTextA: "encounterCardThreeResultA",
        buttonDisplayTextB: "encounterCardThreeResultB",
        buttonDisplayTextC: "encounterCardThreeResultC",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-three-result-a.png' alt='Squirrel floating holding a glowing acorn'>",
        mainText:"<p>You step slowly towards the squirrel, and it believes you to be a friendly presence. It offers up the acorn as a gift, revitalising you.</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-three-result-b.png' alt='Squirrel running through a forest holding an acorn'>",
        mainText:"<p>You observe the squirrel, but jump when it walks towards you. It observes you in turn, and decides you are of no consequence, turns around and runs the opposite direction through the forest.</p>",
    },
    {
        imageHeader:"<img src='assets/images/encounter-card-three-result-c.png' alt='Squirrel burying an acorn'>",
        mainText:"<p>You walk towards the squirrel and it jumps at the rumble from your feet, and hastily buries the acorn in the ground, before scurrying up the tree.</p>",
    },
];


let bossCardOneData = [
    {
        imageHeader: "<img src='assets/images/boss-card-one.png' alt='A balrog stands behind a large rock in a cave'></img>",
        mainText: "<p>You walk down through the cave, and feel warmth striking it's way down the stone corridors. You see streaks of fire erupt from behind a rock, and see a Balrog sneaking around it towards you. What do you do?</p>",
        buttonAText: "Slowly walk towards it and draw your sword ready to attack",
        buttonBText: "Rush towards it, sword drawn, right underneath it's foot",
        buttonCText: "Stop where you stand",
        buttonDisplayTextA: "bossCardOneResultA",
        buttonDisplayTextB: "bossCardOneResultB",
        buttonDisplayTextC: "bossCardOneResultC",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-a.png' alt='Balrog shoots fire over a tall rock'>",
        mainText:"<p>The balrog breathes fire towards you, swirling it around the central rock of the cave, leading it towards your feet. You manage to avoid it mostly, but reacting too slowly, the end traces of the fire catch to your leg and burns through your armour.</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-b.png' alt='The viewer standing below a burning foot'>",
        mainText: "<p>You speed towards the balrog, showing no fear, and take a swipe at it's foot as it attempts to stamp down on you. It tries to steady itself, and you roll out of the way of it's falling sole</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-c.png' alt='The balrog's mouth wide open, swirling with flames'>",
        mainText:"<p>The balrog leans down to greet you entering it's cave, swirling fire around it's mouth preparing for whatever attack you may have planned</p>",
    }
];

let bossCardOneSecondaryData = [
    {
        imageHeader: "<img src='assets/images/boss-card-one-second.png' alt='The balrog stands firm surrounded by ruins'>",
        mainText: "<p>The balrog prepares to fight again, smacking itself against the walls of the cave, causing stone to crack and fall to the ground</p>",
        buttonAText: "Attempt to climb it's leg",
        buttonBText: "Wait for it to step a little closer to you",
        buttonCText: "Hold by the rock, drawing it's fire breath",
        buttonDisplayTextA: "bossCardOneSecondaryResultA",
        buttonDisplayTextB: "bossCardOneSecondaryResultB",
        buttonDisplayTextC: "bossCardOneSecondaryResultC",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-d.png' alt='The player hanging off the horn of the Balrog'>",
        mainText:"<p>You try to climb the leg of the balrog, but don't expect it to be as difficult as you thought. The balrog reaches it's hand over to you and grabs you, forcing you onto it's left horn. You hand there as a prize for the Balrog to retreat with.<p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-e.png' alt='The balrog's face on the ground, mouth open.'>",
        mainText:"<p>You swipe at both it's legs, cutting tendons in the ankles, dropping it to it's knees. The balrog drops it's head and you drive your sword through the roof of it's mouth slaying the beast.</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-one-result-f.png' alt='The player and balrog lay on the ground'>",
        mainText:"<p>You stand by the rock in the middle of the cave, and wait for it to breathe fire at you, running around the rock as it leads it's fire behind you. You trick it to keep the flames going, and they reach it's back, burning it's scales off. The flames reach you but you manage to stab your sword through to it's flesh, drawing blood as it collapses to the ground. You stagger forward and collapse with it, dying a hero.</p>",
    }
];

let bossCardTwoData = [
    {
        imageHeader: "<img src='assets/images/boss-card-two.png' alt='A wizard floats above a clifftop'>",
        mainText: "<p>You follow the sun and walk out of the forest to the edge of a cliff, and there waiting for you is a wizard, preparing a spell. 'So you're the one who's been messing around with MY forest? This should teach you..'</p>",
        buttonAText: "Hide from the blast",
        buttonBText: "Parry the spell",
        buttonCText: "Stand your ground",
        buttonDisplayTextA: "bossCardTwoResultA",
        buttonDisplayTextB: "bossCardTwoResultB",
        buttonDisplayTextC: "bossCardTwoResultC",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-a.png' alt='Man hiding from a wizard floating in the air'>",
        mainText:"<p>You presume the trajectory of the wizard's attack, and dart towards the cliff edge where you see a small enclave to hide in. The blast flies past you and you avoid damage</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-b.png' alt='Man holding a sword reflecting a wizard's spell'>",
        mainText:"<p>You see the wizard prepare his spell and think that you and your sword were built for this moment. You ready your sword across your chest and manage to absorb some of the blast. It reflects back and scars his shoulder</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-c.png' alt='Wizard's spell hits a man in the arm'>",
        mainText:"<p>You debate how to handle the wizard, and decide to pull out your sword. However you took too long, and the Wizard's electric shock hits your arm and engulfs your arm</p>",
    }

];

let bossCardTwoSecondaryData = [
    {
        imageHeader: "<img src='assets/images/boss-card-two-secondary.png' alt='A wizard knelt on the ground, preparing a spell'>",
        mainText: "<p>The wizard takes a moment to recover on the ground, closing his eyes slowly and preparing a spell between his hands. You see magik swirling around his palms and you feel a power emanate from him</p>",
        buttonAText: "Interrupt the spell",
        buttonBText: "Hide from the spell",
        buttonCText: "Charge the wizard",
        buttonDisplayTextA: "bossCardTwoSecondaryResultA",
        buttonDisplayTextB: "bossCardTwoSecondaryResultB",
        buttonDisplayTextC: "bossCardTwoSecondaryResultC",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-d.png' alt='Wizard dead on a broken tree'>",
        mainText:"<p>You run towards the wizard, when you get close you drag your hand through the dirt and throw the rocky dust at his hands and interrupt the spell. He's distracted and the spell back fires, exploding between his hands and throwing him up in the air. He lands on a fallen tree and is impaled on one of the stuck up branches</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-e.png' alt='The wizard standing above a dead body'>",
        mainText:"<p>You drop your sword and try to hide from the spell. The wizard causes a volcanic earthquake beneath your feet. He pulls you down into the cracking earth, throwing you up and slamming you back down to the ground</p>",
    },
    {
        imageHeader:"<img src='assets/images/boss-card-two-result-f.png' alt='A wizard and a man falling down a cavern'>",
        mainText:"<p>You drop your sword and charge at the wizard. He notices you rushing towards him and works to hurry his magik. When you reach him, you grapple his hands and the power he has built up implodes between both sets of hands and throws you both in the air, cutting into both of you. The power throws you back to the cliff edge and you both fly over and down to a ravine below.</p>",
    },
];

let combatCardArr = [combatCardOneData, combatCardTwoData, combatCardThreeData, combatCardFourData, combatCardFiveData];
let encounterCardArr = [encounterCardOneData, encounterCardTwoData, encounterCardThreeData];
let bossCardArr = [bossCardOneData, bossCardTwoData];


});



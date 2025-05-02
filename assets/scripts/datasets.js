
combatCardData = [
{
    imageHeader: "<img src='assets/images/combat-card-one-result-a.png' alt='The beast angrily charges out from the bush towards you, a paw raised to attack.'>",
    mainText: "<p>You swing at the beast and as your arm reaches around it swipes at you with it's claws and cuts your chest. You recoil back and it runs away into the darkness</p>",
},
{
    imageHeader: "jfghghghghggh",
    mainText: "fhghghghghgh"
},
{
    imageHeader: "jfghghghghggh",
    mainText: "fhghghghghgh"
}

]


function displayText(argument){
    if(argument === "combatCardOneResultA"){
        imageHeader.innerHTML = combatCardData[0].imageHeader;
        mainText.innerHTML = combatCardData[0].mainText;
    }else if(argument === "combatCardOneResultB"){
        imageHeader.innerHTML = combatCardData[1].imageHeader;
        mainText.innerHTML = combatCardData[1].mainText;
    }
    else if(argument === "combatCardOneResultC"){
        imageHeader.innerHTML = combatCardData[2].imageHeader;
        mainText.innerHTML = combatCardData[2].mainText;
    }
    showContinue();

}

    const arrBtns = [
        {
            btntitle: buttonA,
            btnDesc: combatCardOneResultA
        },
        buttonA, buttonB, buttonC
    ]

    arrBtns.forEach(btn  => btn.addEventListener("click", btn) )



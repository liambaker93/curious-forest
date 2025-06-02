# Curious Forest = Testing

## Contents

- [Automated Testing](#automated-testing)
    - [W3C Validator](#w3c-validation)
    - [Lighthouse](#lighthouse)
- [Manual Testing](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Full Testing](#full-testing)
    - [Script Testing](#script-testing)

- - -

The function of this website for me was to push what I understood of JavaScript, and how to manipulate it in different ways to get the outcome I wanted. 

I didn't have much testing to do around HTML elements, as it's all on one page and mostly repeated elements.

### Automated Testing

#### W3C Validation

I used W3C to validate both the HTML and the CSS.

 - [index.html](./assets/testing/html-validation-complete.png)
 - [style.css](./assets/testing/css-validation.png)

#### Lighthouse

I used Google's lighthouse feature to test the accessiblity of the website and it's responsive. I was unsure if I needed to run it twice, once on the main start page and then again with an actual level loaded, however when I loaded a level and then ran the lighthouse it defaulted back to the homepage. 

[Lighthouse result](./assets/testing/homepage-lighthouse.png)

### Manual Testing

#### Testing User Stories

| Goals | How are they achieved? |
| :--- | :--- |
| "I like to play games, and want the option to have a different experience each time I play." | Creating a random assortment of levels so that each time the player loads the game it is slightly different. Having different outcomes for each level also means there's a variety to what the player can experience. |
| "I don't play many games, so want an easy to understand game that doesn't require many rules to get into." | Creating an experience with few rules and replicatable steps was key. I kept the amount of options offered to the player low at 3, and then kept three choices throughout the game. There's an instruction box on the start page which outlines the rules for the player, which they need to acknowledge as having read to continue with the game. |


#### Full Testing

Full testing was completed on Google Chrome on a desktop PC and on a Samsung Galaxy S22 Ultra.

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | ----- | ----- | --- | --- |
| Start Adventure button verifies instructions | Clicking on the 'Start Adventure' button should load a form for the user to verify they have read the instructions. | Click on the button, read the instructions and then type 'yes'. | Form loads, submits when 'yes' is typed and instructions have been read | Pass |
| Buttons lead to a result page | A new image loads upon clicking a button, and allow you to continue the game | Clicked each button through and checked the continue adventure button comes up and allows the player to continue. | Buttons lead to expected outcomes players are able to click to continue through the game. | Pass  |
| Health adjusts for players | Some buttons will result in the player's health changing | Noted which buttons specifically will adjust player's health and checked that those buttons adjust the health correctly. | When health needed to be adjusted, the console logged the correct health amount | Pass |
| Game title reloading the page | Clicking on the title of the game will reload the page and start you from the beginning | Clicked on the game title | Page reloaded | Pass |

#### Script Testing 

I was routinely testing the scripts within the game to make sure they were doing what I needed while also being written as efficiently as possible. 

Below are some bugs found during the process of coding the site, and how I fixed them. 

#### Buttons

There was an early stage where the buttons weren't working properly when it came to toggling them on/off.

[Initial button layout](./assets/testing/button-toggle-bug-one.png)

When the card is loaded, it needed to have three buttons underneath the image, which when selected will then disappear and be replaced with one button saying 'continue the adventure'.

It will also load the result of the button clicked, refreshing the image and the text underneath it.

[Initial button press](./assets/testing/button-toggle-bug-two.png)

When the button was pressed, it wasn't loading the image I wanted, nor was it toggling the buttons off, which was making the page look cluttered.

[Initial code for the game card](./assets/testing/button-toggle-bug-three.png)

The code initial had the buttonToggle function loaded in each time the buttons were pressed, as well as at the start of each card. So what was happening was the buttons were constantly toggling too many times, making it difficult to troubleshoot what was happening and keep the code maintained. 

[Fixed code snippet](./assets/testing/button-toggle-bug-four.png)

Now the function ended up changing by the end of the project, but the principle of managing where functions were being called specifically was helpful to learn early on as it meant the more complicated the project got, I wasn't making that same mistake over again.

#### End of the game

After cycling through cards, the game wasn't able to reset or even display anything as I hadn't coded anything to handle that. 

[Initial end to the game](./assets/testing/card-end-initial.png)

I added in an else function to handle if the logic can't display another level to the player, which has retained there all the way through as a way to provide the player a way to get back to the home page if the game breaks. 

[Fixed code to handle the game ending](./assets/testing/card-end-fix.png)

#### InnerHTML not displaying properly

I had at one point a card which was displaying the p tags as part of the text line.

[p Tags displaying in text](./assets/testing/boss-card-p-error.png)

This was a simple fix, just cleaning up the syntax for the innerHTML. I had left it as innerText so the JavaScript was taking it literally rather than transposing it to HTML. 

[InnerText line underneath innerHTML line](./assets/testing/boss-card-p-fix.png)

#### Combat Card streamlining

Initially there were individual cards for each level all with replicated functions. 

This led to a number of issues, including bloating the script out with repeated code, and bugs with the health not adjusting properly due to the button clicks repeating everytime things were pressed. 

It made the code harder to troubleshoot when things were going wrong, and through a call with my Mentor, he recommended moving all of the data into a seperate script file to hold it all together, leaving the main game script to be more readable and just handle the actual scripting. 

[Initial layout of the combat cards](./assets/testing/combat-card-function-initial.png)

This image shows the initial layout I had before creating the datasets script to house all the info. 

It shows how bloated the function is, and this function was going to be replicated everytime I had a card. I had asked about how to streamline the code as I was always looking for ways to reduce the amount of code I had to make the code effective and efficient.

[Final card function layout](./assets/testing/combat-card-function-final.png)

The function went through a few iterations, one of which is below, but this is how it ended. I finally understood the usefulness of passing parameters through functions to get them to work more specifically for you. I went from the idea I initally had about having different functions depending on if it was a 'combat' 'encounter' or 'boss' card being displayed to the player, to having one function which would then just have different parameters passed through it to solve what was being displayed. 

#### Button click issues

One persistent bug I had was the health not adjusting properly to what I was intending to happen at any given time. I set up a global event listener for the main three buttons which would then be written once but, similarly to the final card function, be able to have different parameters passed through it. 

The function iterated through each button and waited for when a button was clicked. 

[Initial button click function](./assets/testing/combat-card-function-click-inital.png)

After doing some researching online, I found posts suggesting that the buttons need to be part of the global scope in order to not keep repeating themselves. So I took the buttons out of the function, and left them within the main script file and that solved the problem.

[Button click fixed](./assets/testing/combat-card-function-click-update.png)

#### Instructions Form Verification

Part of the requirements for the project were to involve a form that can be verified by the script intelligently and have a working application. I had already been asked by some friends who were periodically testing the site if I was going to add instructions to the page and so I thought to add instructions and then verify the user had read them.

[Instructions prompt](./assets/testing/instruction-box-no-verify.png)

I used bootstrap to create a modal that asks the user to confirm they have read the instructions. I knew however that I needed to add some scripting in to make the box work better and showcase some knowledge of JS. 

[Instructions box code](./assets/testing/instructions-box-code.png)

I coded the box to read if the user had actually read the instructions or not, and then depending on what the user inputted into the text box, display different prompts to point out what they've done wrong. 

If the user inputs anything other than 'yes' then the box will display that they need to type 'yes'. If the user hasn't read the instructions then the box will display that they need to read them. 

Clicking on the instructions then runs the function to change the instructionsRead object to 'true'. This, coupled with the user typing in 'yes', will then trigger the game to start.

[Instructions box when the user hasn't read the instructions](./assets/testing/instructions-box-not-read.png)

[Instructions box with no input](./assets/testing/instructions-box-empty.PNG)

The other issue that arose that needed fixing, was the difference between 'yes' and 'Yes'. Logically the script would view these as two different inputs, so I needed to transpose whatever they wrote in the box to lower case, so that if they write 'YES' it will match with the 'yes' being waited for by the javascript.

Another issue I had when creating the form from a bootstrap form, was it having the input type as 'submit' which was then leading to an error 503 page. I searched online and found that if the purpose of the form isn't actually to submit any data anywhere, then submit should be changed to text to avoid that error.

[Instructions HTML with fixed form input type](./assets/testing/instructions-form-html.png)

The final bug I had with the instructions form, was that the modal itself wasn't closing when launching the game. I fixed this by adding a button to the modal to close the modal, 'return to the pub', and I had this triggered by the Javascript when the code had validated and started the game. 






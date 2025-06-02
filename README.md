# Milestone 2 project - Insert name here

Welcome to the README for the (project name) choose your own adventure game site.

Visit the deployed site: (insert link)

JavaScript was an interesting language to start getting involved with and learning, so I wanted to do a project that would give me plenty of opportunities to gain further understandings of what JS is capable of and how to use it efficiently. 

## Table of Contents
1. [Rationale](#rationale)
2. [User Stories](#user-stories)
3. [Wireframes](#wireframes)
    - [Desktop Wireframes](#desktop-wireframes)
    - [Mobile Wireframes](#mobile-wireframes)
4. [Styling](#styling)
    - [Fonts](#fonts)
    - [Colors](#colors)
5. [Testing](#Testing)
    - [Code Validation](#code-validation)
    - [Bugs Found](#bugs-found)
    - [Script Tests](#script-tests)
6. [Deployment & Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
7. [References](#references)
    - [Education Tools](#education-tools)
    - [Design Tools](#design-tools)
    - [Images](#images)

## Rationale

This project is designed to help further my understanding of JavaScript as a language, trying to lightly incorporate different functionalities to try and pull together a seamless experience for the user. 

Having the different kinds of story 'cards' as I've referred to them throughout the code, and having them pulled with a degree of randomness was important for me to understand how to implement, as it solved the first user story easily. If the cards being displayed to the user are random, then this will create a different user experience. 

However, I aim for this game to be developed by me the more I learn and the more ideas for cards I have, so I needed to create a system that easily allowed for later additions. 

I aim for this to also not involve AI art at some point. Gemini has been very useful in helping me create the art for the game currently, however I view these as placeholders to give the site some flavour while I wait to get some actual art drawn up and included.



## User Stories

- "I like to play games, and what the option to have a different experience each time I play."

- "I don't play many games, so want an easy to understand game that doesn't require many rules to get into."

- "I like to have varying difficulties when I play games, so I can feel like i'm getting better at it."

## Wireframes

### Desktop Wireframes

Beginning the wireframing I knew I wanted a very simplistic page, with just an image, starting text and the 'Start Adventure' button. 

I wanted the image to take up most of the page to draw the user's attention to the centre of the page.

![Game launch page](./readme-files/assets/wireframes/desktop-start-page.PNG)

When the user clicks the start adventure button, I wanted the page to change to display a new image, new text and new button options.



![Level page](./readme-files/assets/wireframes/desktop-game-page.PNG)

### Mobile Wireframes

![Level Page](./readme-files/assets/wireframes/phone-game-page.PNG)

The phone layout I wanted to be readable with minimal scrolling. So wanted the image to fit within the viewport of the device, and then have the buttons below it.

## Styling

For this project, I wanted to keep the site simple and plain in terms of styles.

I incorporated Bootstrap mainly to help with the layout of the site and to keep the images and the buttons uniform and neat.

The main piece of styling that evolved throughout the project was how to display the Hearts on the top of the page to the player. I used Font Awesome to find the hearts I wanted and then built them into the page. They then needed to only display when the game actually starts, and appear along the top of the image parallel to the game title. 

This is how the full health bar displays to the player. Each heart represents two points of health, as the game state begins with the player having 6 points of health. Instead of having 6 hearts, Font Awesome had a cracked heart element which I used to display the interim health points.

![Full health bar](./readme-files/assets/styling/health-bar.PNG)

This is how 5 points of health looks to the player.

![Cracked heart element](./readme-files/assets/styling/health-crack.PNG)

Initially I had styled the hearts to be hidden from the player when they had lost a heart's worth of health. However, while testing the game amongst some friends, one had commented that actually it may be better to make the heart faded rather than gone entirely. 

I took this on board, and adjusted it from being hidden, to creating a new CSS class to turn the opacity down. 

![Health bar with hidden elements](./readme-files/assets/styling/health-change.PNG)

I used JS to then add this class on to the hearts when the health conditions have been met, which looks more obvious to the player what has happened to their health, and also was actually quite useful when it came to testing the scripting as I felt it gave me a better indication as to what was happening.

![Health bar faded CSS class](./readme-files/assets/styling/health-change-class.PNG)

![Transparent health bar](./readme-files/assets/styling/health-change-transparent.PNG)



## Testing

### Code Validation

#### HTML Validation

The HTML validation came up with a few warnings about redundant closing tags which I cleared and then I had used < p > tags on either side of the list within the instructions modal, which it deemed irrelevant so I also deleted those. 

One warning it came up with was about a closing H1 tag. I had initially used two H1 tags for both the title of the game and the health icons. I then cleaned this up, used a span within the H1 to house the health and then styled with CSS to push the health to where I wanted them to go.

![HTML Validation with H1 warning](./readme-files/assets/testing/html-validation.PNG)

After fixing it I had no errors show on the validation.

![HTML Validation without any warnings](./readme-files/assets/testing/html-validation-complete.PNG)

#### CSS Validation

The CSS validated first time with no issues present

![CSS Validation](./readme-files/assets/testing/css-validation.PNG)

### Bugs Found

### Script Tests

## Deployment & Local Development

### Deployment

### Local Development

#### How to Fork

#### How to Clone

## References

### Education Tools

### Design Tools

### Images

All of the images for this project were generated using Google Gemini.

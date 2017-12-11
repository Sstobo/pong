# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down
# pong

**Learnings**
This project required a lot of research and variable tracking, which initially created some confusion in me. At first I had a tough time keeping up with where all the variables were coming from. What I found, was that by very carefully tracking the variables throughout the code, I was able to begin building a comprehensive understanding of the project. 

This is a technique that I have since applied to every project, and will continue to use in the future.

Another factor that was a bit of a revelation, was the limitted ammount of hard coded variables. Much of the content is generated with the board height and width variables. By following this protocol, one can have multiple variables remain in proportion to each other despite changes and re-sizing.

**Stretch goal info**
I have added a method to the goal function that plays celebratory crowd noises when a score of 10 is exceeded. It also resets that players score to 0.

Multiball -
On either player surpassing a score of 4 or 7, an extra ball is instantiated. Ball size varies. This is done with an if statement in the main game loop, as well as two extra balls being constructed but not rendered until the appropriate conditions are met.

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
This was a challenging project! At first I had a tough time keeping up with where all the variables were coming from. I spent some time commenting and tracing them back to thier source, and this helped a lot. Overall tons of fun, JS is slowly coming together.



**Stretch goal info**
I have added a method to the goal function that plays celebratory crowd noises when a score of 10 is exceeded. It also resets that players score to 0.

Multiball -
On either player surpassing a score of 4 or 7, an extra ball is instantiated. Ball size varies. This is done with an if statement in the main game loop, as well as two extra balls being constructed but not rendered until the appropriate conditions are met.
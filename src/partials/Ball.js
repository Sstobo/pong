import {SVG_NS} from '../settings';
export default class Ball {
  
// ball constructor
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
    this.ping = new Audio('public/sounds/drum1.wav');
    this.ping1 = new Audio('public/sounds/drum2.wav');
    this.ping4 = new Audio('public/sounds/cheer.wav');
  }
// ball reset
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

// bug fix - make sure vy is not 0
    this.vy = 0;
    while (this.vy === 0) {
    this.vy = Math.floor(Math.random() * 10 - 5);
    }

// random vector creator for x
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

// wall collision
    wallCollision(paddle1, paddle2) {
      const hitLeft = this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;
      const hitBottom = this.y + this.radius >= this.boardHeight;
    
      if ( hitLeft ) {
        this.direction = -1;
        this.goal(paddle2);         
      }
      else if (hitRight) { 
        this.direction = 1;
        this.goal(paddle1);   
      }  
      else if ( hitTop || hitBottom ) {
        this.ping1.play();
        this.vy = -this.vy;        
      }
    }
    
// paddle collision, pulled from paddle  if ball is moving right 
  paddleCollision(paddle1, paddle2) {
      if (this.vx > 0) {
        // detect collision right side, pass in values from paddle2 object
          let player = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        // destructuring array 
          let [leftX, rightX, topY, bottomY] = player;
        // if to check if ball hits right left edge
          if (
         // right edge of ball    >= left edge of paddle direction -
              this.x + this.radius >= leftX 
              && this.y >= topY 
              && this.y <= bottomY
              // ball y is >= topY and ball y <= bottomY
          ) { 
            this.vx = -this.vx;
            this.ping.play();
          }

      } else {
        // set coordinates if ball is moving left
          let player = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
          let [leftX, rightX, topY, bottomY] = player;

          if (
            // left edge  >= right edge of paddle direction - INVERT VALUES
            this.x - this.radius <= rightX 
            && this.y >= topY 
            && this.y <= bottomY
            // ball y is >= topY and ball y <= bottomY
        ) { this.vx = -this.vx;
            this.ping.play(); }   
      }
    }
// Goal function    
    goal(player) {
      player.score++;
      if (player.score > 10 ){
       player.score = 0;
       this.ping4.play();
      }
      this.reset(); 
    }
// args from render call in game js
  render(svg, paddle1, paddle2) {
    //update rendering variable;
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;

    // wall collision render 
    this.wallCollision(paddle1, paddle2);
    this.paddleCollision(paddle1, paddle2);

// draw the ball
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius );
    ball.setAttributeNS(null, 'fill', 'white');
    ball.setAttributeNS(null, 'stroke', 'black');
    ball.setAttributeNS(null, 'cx', this.x );
    ball.setAttributeNS(null, 'cy', this.y);
    svg.appendChild(ball);
}
}
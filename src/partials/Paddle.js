import {SVG_NS} from '../settings';
export default class Paddle {
// constructor builds an instance of whatever it is
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;


// controls
// up and down are KEYS passed in as last two args, up/down are arg names, KEYS.a,b are variables passed in
    document.addEventListener('keydown', event => {
        switch(event.key) {
          case up: 
            this.up();
            break;
          case down: 
            this.down()
            break;
        }   
    });
  }
// returns array of paddle info
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }


  up() {
// get max # either 0 or y - speed  max is this.y
// if 0 is highest (eg paddle is at y9, moves 10, would be -1, therefore 0 is highest and movement is blocked)
    this.y = Math.max(0, this.y - this.speed) 
  }
// same principle but for high nunbers, looking for lowest, not allowing y to equal more than this.boardHeight
  down(){
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed)
  }

// paddle render
  render(svg) {
    let paddle = document.createElementNS(SVG_NS, 'rect');
    paddle.setAttributeNS(null, 'width', this.width);
    paddle.setAttributeNS(null, 'height', this.height);
    paddle.setAttributeNS(null, 'x', this.x);
    paddle.setAttributeNS(null, 'y', this.y);
    // paddle.setAttributeNS(null, 'speed', this.speed);
    // paddle.setAttributeNS(null, 'score', this.score);
    paddle.setAttributeNS(null, 'stroke', 'black');
    paddle.setAttributeNS(null, 'fill', 'white');

    svg.appendChild(paddle);
}
}


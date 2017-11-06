import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
export default class Game {

	constructor(element, width, height) {		
		this.element = element;
//board size
		this.width = width;
		this.height = height;
// targets div in html "game"
		this.gameElement = document.getElementById(this.element);
// instance a board
		this.board = new Board(this.width, this.height);
// Score board		
		this.score1 = new Score(10, 30, 30);
		this.score2 = new Score(270, 30, 30);
// ball instantiator ( plus bonus balls)
		this.radius = 10;
		this.ball = new Ball(this.radius,this.width, this.height);
		this.ball2 = new Ball(this.radius + 5,this.width, this.height);
		this.ball3 = new Ball(this.radius - 5,this.width, this.height);
// set some variables for the paddles
		this.boardGap = 10;
		this.paddleHeight = 56;
		this.paddleWidth = 8;
		this.paddleStart  = (this.height - 	this.paddleHeight) /2;
// left paddle - whole content are args
		this.paddle1 = new Paddle(
		this.height, 
		this.paddleWidth, 
		this.paddleHeight, 
		this.boardGap, 
		this.paddleStart,
			KEYS.a,
			KEYS.z
			);

// right paddle
		this.paddle2 = new Paddle(
		this.height, 
		this.paddleWidth,
		this.paddleHeight, 
		(this.width-this.boardGap-this.paddleWidth),
		this.paddleStart,
			KEYS.up,
			KEYS.down
		);

			document.addEventListener('keydown', event => {
					if (event.key === KEYS.spaceBar ) {
						this.pause = !this.pause; 
					}
				});
	}

	
render() {

		if (this.pause) {	return;}
// if pause is true keep er goin
		this.gameElement.innerHTML = '';	
// draw game board
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');
// select game namespace and append div
		this.gameElement.appendChild(svg);
// draw actors
		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.score1.render(svg, this.paddle1.score);	
		this.score2.render(svg, this.paddle2.score);	

		// Add more balls when score of 4 or 7 is hit
		if (this.paddle2.score > 4 || this.paddle1.score > 4) {
		this.ball2.render(svg, this.paddle1, this.paddle2);
	} if (this.paddle2.score  > 7 || this.paddle1.score > 7 ) {
		this.ball3.render(svg, this.paddle1, this.paddle2);
	}
			}
}

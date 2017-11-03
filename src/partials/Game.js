import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
export default class Game {

	constructor(element, width, height) {
// calibration
		this.element = element;
//board size
		this.width = width;
		this.height = height;
// follow the height and width!

// targets div in html "game"
		this.gameElement = document.getElementById(this.element);

// instance a board
		this.board = new Board(this.width, this.height);
		
// ball instantiator
		this.ball = new Ball(10,this.width, this.height )


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
	}

	render() {
		this.gameElement.innerHTML = '';	
// draw game board
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');

		this.gameElement.appendChild(svg);
// draw actors
		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg);

	}

}
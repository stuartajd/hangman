import React from 'react';

export default function Hangman({ word, guesses }) {
	const incorrectGuesses = guesses.filter(letter => !word.includes(letter));
	
	return (
		<svg className="h-full w-full" stroke="black" strokeWidth="3" fill="none">
			{incorrectGuesses.length >= 1 && <line id="line-bottom" x1="30" y1="350" x2="300" y2="350" />}
			{incorrectGuesses.length >= 2 && <line id="line-middle" x1="30" y1="30" x2="30" y2="350" />}
			{incorrectGuesses.length >= 3 && <line id="line-top" x1="30" y1="30" x2="175" y2="30" />}
			{incorrectGuesses.length >= 4 && <line id="line-down-top" x1="175" y1="30" x2="175" y2="100" />}
			{incorrectGuesses.length >= 5 && <ellipse id="head" cx="200" cy="115" rx="30" ry="30" />}
			{incorrectGuesses.length >= 6 && <line id="body" x1="170" y1="115" x2="160" y2="300" />}
			{incorrectGuesses.length >= 7 && <line id="left-arm" x1="125" y1="200" x2="170" y2="150" />}
			{incorrectGuesses.length >= 8 && <line id="right-arm" x1="170" y1="150" x2="200" y2="200" />}
			{incorrectGuesses.length >= 9 && <line id="left-leg" x1="125" y1="325" x2="160" y2="300" />}
			{incorrectGuesses.length >= 10 && <line id="right-leg" x1="200" y1="325" x2="160" y2="300" />}
		</svg>
	);
}
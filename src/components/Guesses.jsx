import React from 'react';

export default function Guesses({ word, guesses }) {	
	const lettersSplit = word.toUpperCase().split('');
	
	return (<div className="mx-auto flex items-center justify-center text-3xl my-5">
		{lettersSplit.map((letter, index) => {
			return (<div key={index} className="px-1">
				{ guesses.includes(letter) && <>{letter}</> }
				{ !guesses.includes(letter) &&  <>_</> }
			</div>)
		})}
	</div>) 
}
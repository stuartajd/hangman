import React from 'react';

export default function Key({letter, guesses, selectLetter, disabled}) {
	function select() {
		selectLetter(letter);
	}
	
	return (
		<button 
			onClick={select} 
			className="font-medium rounded-lg text-sm h-8 w-8 text-center mr-2 mb-2 bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-700 transition-all" 
			disabled={guesses.includes(letter) || disabled}
			type="button">
			{letter}
		</button>	
	);
}
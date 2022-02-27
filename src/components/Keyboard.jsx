import React from 'react';

import Key from './Key';

export default function Keyboard({ guesses, selectLetter, hasWon }) {
	const letters = [
		['Q','W','E','R','T','Y','U','I','O','P'],
		['A','S','D','F','G','H','J','K','L'],
		['Z','X','C','V','B','N','M']
	];
	
	return (<>
		{letters.map((letterRow, rowIndex)=> {
			return (
				<div key={rowIndex} className="flex justify-center">
					{letterRow.map((letter) => {
						return (
							<Key key={letter} letter={letter} selectLetter={selectLetter} guesses={guesses} disabled={hasWon} />	
						)
					})}
				</div>	
			) 
		})}
	</>);
}
import React, {useState, useEffect} from 'react';
import './App.css';

import Hangman from './components/Hangman';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';

import confetti from 'canvas-confetti';

import wordService from './services/word-service';

function App() {
	const [ currentWord, setCurrentWord ] = useState('');
	const [ guesses, setGuesses ] = useState([]);
	const [ hasWon, setHasWon ] = useState(false);
	const [ hasLost, setHasLost ] = useState(false);

	
	useEffect(() => {
		// Get a single word from word list.
		setCurrentWord(wordService.getRandomWord().toUpperCase());
	}, []);

	useEffect(() => {
		// No word?
		if(!currentWord) return;
		// Already won?
		if(hasWon) return;
		
		// Set guess & check the letters meet.
		const incorrectGuesses = guesses.filter(guess => !currentWord.includes(guess));
		if(incorrectGuesses.length > 9) {
			return setHasLost(true);
		}

		const allLettersMatched = currentWord.split('').filter(currLetter => !guesses.includes(currLetter)).length === 0;
		setHasWon(allLettersMatched);
	}, [guesses]);

	function selectLetter(letter) {
		if(guesses.includes(letter)) return alert('You have already chosen this letter!');

		setGuesses([...guesses, letter]);
	}
	
  	return (
	    <main className="max-w-md my-8 mx-auto transition">
	      	<div className="rounded relative bg-blue-50 shadow-lg p-3">
				<div className="rounded bg-gray-300 p-3 h-96">
					<Hangman word={currentWord} guesses={guesses} />
				</div>
				
				<Guesses word={currentWord} guesses={guesses} />
				<Keyboard disabled={hasLost || hasWon} guesses={guesses} selectLetter={selectLetter} />

				{ hasWon && <div className="absolute left-0 top-1/2 bottom-1/2 w-full"><div className="text-center w-full bg-green-600/75 py-4 text-capitalise font-bold text-white">You won!</div></div> }
				{ hasLost && <div className="absolute left-0 top-1/2 bottom-1/2 w-full"><div className="text-center w-full bg-red-600/75 py-4 text-capitalise font-bold text-white">You lost! :(</div></div> }

			</div>
	    </main>
  	);
}

export default App;
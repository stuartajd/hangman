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
	
	useEffect(() => {
		// Get a single word from word list.
		setCurrentWord(wordService.getRandomWord().toUpperCase());
	}, []);

	useEffect(() => {
		// No word? Don't run this then please! :De
		if(!currentWord) return;

		if(hasWon) return;
		
		// Set guess & check the letters meet.
		const incorrectGuesses = guesses.filter(guess => !currentWord.includes(guess));
		if(incorrectGuesses.length > 9) return alert('You lost :(');

		const allLettersMatched = currentWord.split('').filter(currLetter => !guesses.includes(currLetter)).length === 0;
		setHasWon(allLettersMatched);
		if(allLettersMatched) {
			return alert('You won! :D');
		}
	}, [guesses]);

	function selectLetter(letter) {
		if(guesses.includes(letter)) return alert('You have already chosen this letter!');

		setGuesses([...guesses, letter]);
	}
	
  	return (
	    <main className="max-w-md my-8 mx-auto">
	      	<div className="rounded bg-blue-50 shadow-lg p-3">
				<div className="rounded bg-gray-300 p-3 h-96">
					<Hangman word={currentWord} guesses={guesses} />
				</div>
				
				<Guesses word={currentWord} guesses={guesses} />
				<Keyboard guesses={guesses} hasWon={hasWon} selectLetter={selectLetter} />
			</div>
	    </main>
  	);
}

export default App;
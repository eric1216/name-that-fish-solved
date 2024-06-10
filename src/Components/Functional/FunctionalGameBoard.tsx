import './styles/game-board.css';
import { InitialFishesTypes } from '../../types';
import { FormEvent, useState } from 'react';

type FunctionalGameBoardTypes = {
  fishData: InitialFishesTypes;
  setScore: (arg0: string) => void;
};

export function FunctionalGameBoard({ fishData, setScore }: FunctionalGameBoardTypes) {
  const [answer, setAnswer] = useState('');
  const { name, url } = fishData;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setScore(answer);
    setAnswer('');
  };

  return (
    <div id='game-board'>
      <div id='fish-container'>
        <img src={url} alt={name} />
      </div>
      <form id='fish-guess-form' onSubmit={handleSubmit}>
        <label htmlFor='fish-guess'>What kind of fish is this?</label>
        <input
          type='text'
          name='fish-guess'
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          autoComplete='off'
        />
        <input type='submit' />
      </form>
    </div>
  );
}

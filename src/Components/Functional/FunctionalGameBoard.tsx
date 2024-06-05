import './styles/game-board.css';
import { FishListObjTypes } from '../../types';
import { useState } from 'react';

type FunctionalGameBoardTypes = {
  fishList: FishListObjTypes[];
  handleSubmit: (arg0: boolean) => void;
};

export function FunctionalGameBoard({ fishList, handleSubmit }: FunctionalGameBoardTypes) {
  const [answer, setAnswer] = useState('');
  const { name, url } = fishList[0];

  return (
    <div id='game-board'>
      <div id='fish-container'>
        <img src={url} alt={name} />
      </div>
      <form
        id='fish-guess-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(answer === name);
          setAnswer('');
        }}>
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

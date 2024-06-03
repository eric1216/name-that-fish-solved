import './styles/game-board.css';
import { FishListPropType } from '../../types';
import { useState } from 'react';

export function FunctionalGameBoard({ fishListProp }: FishListPropType) {
  const [currFish, setCurrFish] = useState(0);
  const [answer, setAnswer] = useState('');
  const { name, url } = fishListProp[currFish];

  return (
    <div id='game-board'>
      <div id='fish-container'>
        <img src={url} alt={name} />
      </div>
      <form
        id='fish-guess-form'
        onSubmit={(e) => {
          e.preventDefault();
          currFish === 3 ? setCurrFish(0) : setCurrFish(currFish + 1);
          alert(answer);
        }}>
        <label htmlFor='fish-guess'>What kind of fish is this?</label>
        <input
          type='text'
          name='fish-guess'
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

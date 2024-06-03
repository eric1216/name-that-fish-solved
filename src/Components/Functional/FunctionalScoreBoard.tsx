//  Where the score is presented
import './styles/score-board.css';
import { FishListPropType } from '../../types';

const incorrectCount = 0;
const correctCount = 0;

export function FunctionalScoreBoard({ fishListProp }: FishListPropType) {
  const fishNames = fishListProp.map((obj) => obj.name);

  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id='choices-left'>
        {fishNames.map((name) => (
          <div key={name} className='choice'>
            {name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}

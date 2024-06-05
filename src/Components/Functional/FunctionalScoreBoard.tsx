//  Where the score is presented
import './styles/score-board.css';
import { FishListObjTypes, ResultObjTypes } from '../../types';

type FunctionalScoreBoardTypes = {
  fishList: FishListObjTypes[];
  results: ResultObjTypes;
};

export function FunctionalScoreBoard({ fishList, results }: FunctionalScoreBoardTypes) {
  const fishNames = fishList.map((obj) => obj.name);
  const { correct, incorrect } = results;

  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {incorrect}</div>
      <div id='choices-left'>
        {fishNames.map((name) => (
          <div key={name} className='choice'>
            {name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
}

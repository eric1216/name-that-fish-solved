//  Where the score is presented
import './styles/score-board.css';
import { FishListObjTypes, ResultObjTypes } from '../../types';

type FunctionalScoreBoardTypes = {
  fishList: FishListObjTypes[];
  results: ResultObjTypes;
};

export function FunctionalScoreBoard({ fishList, results }: FunctionalScoreBoardTypes) {
  const { correct, incorrect } = results;

  const renderFishNames = () => {
    return fishList.map(({ name }) => (
      <div key={name} className='choice'>
        {name}
      </div>
    ));
  };

  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {incorrect}</div>
      <div id='choices-left'>{renderFishNames()}</div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
}

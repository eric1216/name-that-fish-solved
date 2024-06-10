//  Where the score is presented
import './styles/score-board.css';
import { ResultObjTypes } from '../../types';

type FunctionalScoreBoardTypes = {
  fishList: string[];
  results: ResultObjTypes;
};

export function FunctionalScoreBoard({ fishList, results }: FunctionalScoreBoardTypes) {
  const { correct, incorrect } = results;

  const renderFishNames = () => {
    return fishList.map((fishName) => (
      <div key={fishName} className='choice'>
        {fishName}
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

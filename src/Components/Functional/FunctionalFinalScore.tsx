import './styles/final-score.css';
import { ResultObjTypes } from '../../types';

type FunctionalFinalScoreTypes = {
  initialListLength: number;
  results: ResultObjTypes;
};

export const FunctionalFinalScore = ({ initialListLength, results }: FunctionalFinalScoreTypes) => {
  const { correct } = results;
  return (
    <div id='final-score'>
      <h1>Your Final Score Was</h1>
      <div id='score'>
        <p>{correct}</p>
        <hr />
        <p>{initialListLength}</p>
      </div>
    </div>
  );
};

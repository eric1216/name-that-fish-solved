import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { useState } from 'react';
import { initialFishes } from '../../data/fish-data';

const initialFishesLength = initialFishes.length;

export function FunctionalApp() {
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });

  const fishIndex = results.correct + results.incorrect;
  const isGameOver = fishIndex === initialFishes.length;
  const fishList = initialFishes.map((fish) => fish.name).slice(fishIndex);

  const setScore = (answer: string) => {
    const { correct, incorrect } = results;
    const updatedScores = answer === initialFishes[fishIndex].name ? [1, 0] : [0, 1];
    setResults({ correct: correct + updatedScores[0], incorrect: incorrect + updatedScores[1] });
  };

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard fishList={fishList} results={results} />
          <FunctionalGameBoard fishData={initialFishes[fishIndex]} setScore={setScore} />
        </>
      )}
      {isGameOver && <FunctionalFinalScore initialListLength={initialFishesLength} results={results} />}
    </>
  );
}

import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { Images } from '../../assets/Images';
import { InitialFishesTypes } from '../../types';
import { useState } from 'react';

const initialFishes: InitialFishesTypes[] = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

const initialFishesLength = initialFishes.length;
let visible = false;

export function FunctionalApp() {
  const [fishList, setFishList] = useState(initialFishes);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });

  const setScore = (isAnswerCorrect: boolean) => {
    const { correct, incorrect } = results;
    isAnswerCorrect
      ? setResults({ correct: correct + 1, incorrect: incorrect })
      : setResults({ correct: correct, incorrect: incorrect + 1 });
  };

  const removeFish = () => {
    fishList.length > 1 ? setFishList(fishList.slice(1)) : (visible = true);
  };

  const processAnswer = (setScoreArg: boolean) => {
    setScore(setScoreArg);
    removeFish();
  };

  return (
    <>
      {visible || <FunctionalScoreBoard fishList={fishList} results={results} />}
      {visible || <FunctionalGameBoard fishList={fishList} processAnswer={processAnswer} />}
      {visible && <FunctionalFinalScore initialListLength={initialFishesLength} results={results} />}
    </>
  );
}

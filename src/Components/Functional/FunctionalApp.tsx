import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { Images } from '../../assets/Images';
import { useState } from 'react';

type InitialFishesTypes = {
  name: string;
  url: string;
};

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
    if (isAnswerCorrect) {
      setResults({ correct: correct + 1, incorrect: incorrect });
    } else {
      setResults({ correct: correct, incorrect: incorrect + 1 });
    }
  };

  const removeFish = () => {
    fishList.length > 1 ? setFishList(fishList.slice(1)) : (visible = true);
  };

  const handleSubmit = (setScoreArg: boolean) => {
    setScore(setScoreArg);
    removeFish();
  };

  return (
    <>
      {visible || <FunctionalScoreBoard fishList={fishList} results={results} />}
      {visible || <FunctionalGameBoard fishList={fishList} handleSubmit={handleSubmit} />}
      {visible && <FunctionalFinalScore initialListLength={initialFishesLength} results={results} />}
    </>
  );
}

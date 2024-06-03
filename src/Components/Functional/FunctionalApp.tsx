import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { Images } from '../../assets/Images';
import { useState } from 'react';

const initialFishes = [
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

export function FunctionalApp() {
  const [fistList, setFishList] = useState(initialFishes);

  return (
    <>
      <FunctionalScoreBoard fishListProp={fistList} />
      <FunctionalGameBoard fishListProp={fistList} />
      {false && <FunctionalFinalScore />}
    </>
  );
}

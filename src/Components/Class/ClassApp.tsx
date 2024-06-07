import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { InitialFishesTypes } from '../../types';
import { Images } from '../../assets/Images';

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

const fishListLength = initialFishes.length;
let visible = false;

export class ClassApp extends Component {
  state = {
    fishList: initialFishes,
    incorrectCount: 0,
    correctCount: 0,
  };

  setScore = (isAnswerCorrect: boolean) => {
    const { correctCount, incorrectCount } = this.state;
    isAnswerCorrect
      ? this.setState({ correctCount: correctCount + 1 })
      : this.setState({ incorrectCount: incorrectCount + 1 });
  };

  removeFish = () => {
    this.state.fishList.length > 1 ? this.setState({ fishList: this.state.fishList.slice(1) }) : (visible = true);
  };

  processAnswer = (setScoreArg: boolean) => {
    this.setScore(setScoreArg);
    this.removeFish();
  };

  render() {
    const { fishList, incorrectCount, correctCount } = this.state;
    return (
      <>
        <>
          {visible || <ClassScoreBoard fishList={fishList} correct={correctCount} incorrect={incorrectCount} />}
          {visible || <ClassGameBoard fishList={fishList} processAnswer={this.processAnswer} />}
        </>
        {visible && <ClassFinalScore initialListLength={fishListLength} correct={correctCount} />}
      </>
    );
  }
}

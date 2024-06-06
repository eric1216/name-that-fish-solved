import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { Images } from '../../assets/Images';

type InitialFishTypes = {
  name: string;
  url: string;
};

const initialFishes: InitialFishTypes[] = [
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

  incrementScore = () => {
    this.setState({ correctCount: this.state.correctCount + 1 });
  };

  decrementScore = () => {
    this.setState({ incorrectCount: this.state.incorrectCount + 1 });
  };

  setScore = (isAnswerCorrect: boolean) => {
    if (isAnswerCorrect) {
      this.incrementScore();
    } else {
      this.decrementScore();
    }
  };

  handleSubmit = (setScoreArg: boolean) => {
    this.setScore(setScoreArg);
    this.removeFish();
  };

  removeFish = () => {
    this.state.fishList.length > 1 ? this.setState({ fishList: this.state.fishList.slice(1) }) : (visible = true);
  };

  render() {
    return (
      <>
        <>
          {visible || (
            <ClassScoreBoard
              fishList={this.state.fishList}
              correct={this.state.correctCount}
              incorrect={this.state.incorrectCount}
            />
          )}
          {visible || <ClassGameBoard fishList={this.state.fishList} handleSubmit={this.handleSubmit} />}
        </>
        {visible && <ClassFinalScore initialListLength={fishListLength} correct={this.state.correctCount} />}
      </>
    );
  }
}

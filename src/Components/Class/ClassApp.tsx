import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { initialFishes } from '../../data/fish-data';

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  setScore = (answer: string) => {
    const { correctCount, incorrectCount } = this.state;
    const updatedScores = answer === initialFishes[this.fishIndex()].name ? [1, 0] : [0, 1];
    this.setState({
      correctCount: correctCount + updatedScores[0],
      incorrectCount: incorrectCount + updatedScores[1],
    });
  };

  fishIndex = () => {
    return this.state.correctCount + this.state.incorrectCount;
  };

  isGameOver = () => {
    return this.fishIndex() === initialFishes.length;
  };

  fishList = () => {
    return initialFishes.map((fish) => fish.name).slice(this.fishIndex());
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const isGameOver = this.isGameOver();
    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard fishList={this.fishList()} correct={correctCount} incorrect={incorrectCount} />
            <ClassGameBoard fishData={initialFishes[this.fishIndex()]} setScore={this.setScore} />
          </>
        )}
        {isGameOver && <ClassFinalScore initialListLength={initialFishes.length} correct={correctCount} />}
      </>
    );
  }
}

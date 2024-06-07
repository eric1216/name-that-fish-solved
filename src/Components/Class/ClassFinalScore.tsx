import { Component } from 'react';

type ClassFinalScoreTypes = {
  initialListLength: number;
  correct: number;
};

export class ClassFinalScore extends Component<ClassFinalScoreTypes> {
  render() {
    const { initialListLength, correct } = this.props;
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
  }
}

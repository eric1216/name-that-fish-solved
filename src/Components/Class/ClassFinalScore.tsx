import { Component } from 'react';

type ClassFinalScoreTypes = {
  initialListLength: number;
  correct: number;
};

export class ClassFinalScore extends Component<ClassFinalScoreTypes> {
  render() {
    return (
      <div id='final-score'>
        <h1>Your Final Score Was</h1>
        <div id='score'>
          <p>{this.props.correct}</p>
          <hr />
          <p>{this.props.initialListLength}</p>
        </div>
      </div>
    );
  }
}

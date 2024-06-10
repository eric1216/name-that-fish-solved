import { Component } from 'react';
import './styles/score-board.css';

type ClassScoreBoardTypes = {
  fishList: string[];
  correct: number;
  incorrect: number;
};
export class ClassScoreBoard extends Component<ClassScoreBoardTypes> {
  renderFishNames = () => {
    return this.props.fishList.map((fishName) => (
      <div key={fishName} className='choice'>
        {fishName}
      </div>
    ));
  };

  render() {
    const { correct, incorrect } = this.props;

    return (
      <div id='score-board'>
        <div>Incorrect 🔻: {incorrect}</div>
        <div id='choices-left'>{this.renderFishNames()}</div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}

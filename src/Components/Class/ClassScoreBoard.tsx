import { Component } from 'react';
import { FishListObjTypes } from '../../types';
import './styles/score-board.css';

type ClassScoreBoardTypes = {
  fishList: FishListObjTypes[];
  correct: number;
  incorrect: number;
};
export class ClassScoreBoard extends Component<ClassScoreBoardTypes> {
  renderFishNames = () => {
    return this.props.fishList.map(({ name }) => (
      <div key={name} className='choice'>
        {name}
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

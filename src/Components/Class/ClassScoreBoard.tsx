import { Component } from 'react';
import { FishListObjTypes } from '../../types';
import './styles/score-board.css';

type ClassScoreBoardTypes = {
  fishList: FishListObjTypes[];
  correct: number;
  incorrect: number;
};
export class ClassScoreBoard extends Component<ClassScoreBoardTypes> {
  render() {
    const fishNames = this.props.fishList.map((obj) => obj.name);
    return (
      <div id='score-board'>
        <div>Incorrect 🔻: {this.props.incorrect}</div>
        <div id='choices-left'>
          {fishNames.map((name) => (
            <div key={name} className='choice'>
              {name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correct}</div>
      </div>
    );
  }
}

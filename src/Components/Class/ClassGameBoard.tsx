import { Component } from 'react';
import { FishListObjTypes } from '../../types';
import './styles/game-board.css';

type ClassGameBoardTypes = {
  fishList: FishListObjTypes[];
  processAnswer: (arg0: boolean) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardTypes> {
  state = {
    answer: '',
  };

  render() {
    const { fishList, processAnswer } = this.props;
    const { answer } = this.state;
    const { name, url } = fishList[0];

    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={url} alt={name} />
        </div>
        <form
          id='fish-guess-form'
          onSubmit={(e) => {
            e.preventDefault();
            processAnswer(answer === name);
            this.setState({ answer: '' });
          }}>
          <label htmlFor='fish-guess'>What kind of fish is this?</label>
          <input
            type='text'
            name='fish-guess'
            value={answer}
            onChange={(e) => {
              this.setState({ answer: e.target.value });
            }}
            autoComplete='off'
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

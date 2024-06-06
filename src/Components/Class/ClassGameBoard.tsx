import { Component } from 'react';
import { FishListObjTypes } from '../../types';
import './styles/game-board.css';

type ClassGameBoardTypes = {
  fishList: FishListObjTypes[];
  handleSubmit: (arg0: boolean) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardTypes> {
  state = {
    answer: '',
  };

  render() {
    const { name, url } = this.props.fishList[0];
    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={url} alt={name} />
        </div>
        <form
          id='fish-guess-form'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state.answer === name);
            this.setState({ answer: '' });
          }}>
          <label htmlFor='fish-guess'>What kind of fish is this?</label>
          <input
            type='text'
            name='fish-guess'
            value={this.state.answer}
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

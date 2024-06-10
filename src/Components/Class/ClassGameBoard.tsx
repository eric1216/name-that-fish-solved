import { Component, FormEvent } from 'react';
import './styles/game-board.css';
import { InitialFishesTypes } from '../../types';

type ClassGameBoardTypes = {
  fishData: InitialFishesTypes;
  setScore: (arg0: string) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardTypes> {
  state = {
    answer: '',
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.setScore(this.state.answer);
    this.setState({ answer: '' });
  };

  render() {
    const { fishData } = this.props;
    const { answer } = this.state;
    const { name, url } = fishData;

    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={url} alt={name} />
        </div>
        <form id='fish-guess-form' onSubmit={this.handleSubmit}>
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

import React from 'react';
import Board from '../Board';
// eslint-disable-next-line react/prefer-stateless-function
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>Status</div>
          <ol>Todo</ol>
        </div>
      </div>
    );
  }
}

export default Game;

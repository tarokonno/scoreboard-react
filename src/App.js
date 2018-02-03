import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Player from './components/Player';

class App extends Component {
  state = {
    title: 'My Scoreboard',
    players: [
      {
        name: 'David Beckham',
        score: 7,
        id: 1
      },
      {
        name: 'Cristiano Ronaldo',
        score: 9,
        id: 2
      },
      {
        name: 'Lionel Messi',
        score: 10,
        id: 3
      }
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.state.title} />

        <div className="players">
          {this.state.players.map(player => {
            return <Player name={player.name} score={player.score} key={player.id} />
          })}
        </div>
      </div>
    );
  }
}

export default App;

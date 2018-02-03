import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

let nextId = 4;

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

  onScoreChange = (index, value) => {
    this.state.players[index].score += value;
    this.setState(this.state);
  }

  onPlayerAdd = (name) => {
    this.setState({
      players: [
        {
          name: name,
          score: 0,
          id: nextId
        },
        ...this.state.players,
      ]
    })
    nextId += 1
  }

  onRemovePlayer = (index) => {
    this.setState({
      players: [
        ...this.state.players.slice(0, index),
        ...this.state.players.slice(index + 1)
      ]
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.state.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={(value) => this.onScoreChange(index, value)}
                onRemove={() => this.onRemovePlayer(index)}
                name={player.name}
                score={player.score}
                key={player.id}
              />
            );
          })}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

export default App;

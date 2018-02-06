import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';


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
        name: 'Ronaldo',
        score: 9,
        id: 2
      },
      {
        name: 'Lionel Messi',
        score: 10,
        id: 3
      },
      {
        name: 'Ryan Giggs',
        score: 11,
        id: 4
      },
      {
        name: 'Zinedine Zidane',
        score: 5,
        id: 5
      },
      {
        name: 'Ronaldinho',
        score: 12,
        id: 6
      }
    ]
  }

  onScoreChange = (index, value) => {
    this.state.players[index].score += value;
    this.setState(this.state);
  }

  onPlayerAdd = (name) => {
    let nextId = this.state.players.length + 1;

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

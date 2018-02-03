import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    name: ''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pets: []
    };
  }

  getPets = async () => {
    const response = await fetch('http://localhost:3001/api/v1/pets/')
    const { pets } = await response.json();
    this.setState({ pets: pets})
  }

  componentDidMount = () => {
    this.getPets();
  }

  render() {
    const output = this.state.pets.map(pet => {
      return (
        <div>
          <h1> Name: {pet.name} </h1>
          <h1> Type: {pet.type} </h1>
        </div>
      );
    });

    return (
      <div className="App">
        <h1> Test </h1>
        {output}
      </div>
    );
  }
}

export default App;

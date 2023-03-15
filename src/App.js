import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas: [
      { name: 'Ryu', age: '35', belt: 'black', id: 1 },
      { name: 'Yoshi', age: '20', belt: 'green', id: 2 },
      { name: 'Crystal', age: '25', belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    // create a new array with the spread operator, and add the new ninja
    // this keeps us from destructing the original state
    let ninjas = [...this.state.ninjas, ninja];

    // then set the new state with the new array
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      
      // array filter method returns true or false; 
      // if true, ninja is added to the new shallow copy of the state array
      // if false, the ninja is ommitted from the new array 
      // thereby "deleting it from the original array"
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Jeremy', age: 47},
      { name: 'Kyle', age: 70},
      { name: 'Joanne', age: 2}
    ],
    otherState: 'some other value'
};

  switchNameHandler = (newName) => {
    this.setState( { persons: [
      { name: 'FazeBigJerm', age: 12},
      { name: 'Kyko13', age: 13},
      { name: 'Joseph Andrew', age: 50}
    ]
    }) 
  };

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          { name: 'Jeremy', age: 28 },
          { name: event.target.value, age: 28 },
          { name: 'Stephanie', age: 27 }
        ]
      })
    }

}
render() {
      const style= {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return(
      <div className="App">
        <h1>Hi, Im a react app!</h1>
        <p>This is really working!</p>
        <button 
        style={style}
          onClick={() => this.switchNameHandler("Jeremy!")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={ this.state.persons[1].name} 
        age={this.statestate.persons[1].age}>
          click={this.switchNameHandler.bind(this, 'Jeremy!')}
          changed={this.nameChangedHandler}
           My hobbies: Racing</Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
      </div>
    );
  }


export default app;



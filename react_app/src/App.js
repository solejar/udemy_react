
import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Sean', age: '21'},
      {name: 'Sarah', age: '22'},
      {name: 'Karyna', age: '33'}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Seanathan', age: '30'},
        {name: 'Sarah', age: '22'},
        {name: 'Karyna', age: '33'}
      ]
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    )
  }
}

export default App

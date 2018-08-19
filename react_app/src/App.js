
import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      {name: 'Sean', age: '21'},
      {name: 'Sarah', age: '22'},
      {name: 'Karyna', age: '33'}
    ],
    username: 'seanolejar'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: '30'},
        {name: 'Sarah', age: '22'},
        {name: 'Karyna', age: '33'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Sean', age: '30'},
        {name: event.target.value, age: '22'},
        {name: 'Karyna', age: '33'}
      ]
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <UserInput changed={this.usernameChangedHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Seanathan')}> Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Seanyboi')}>My Hobbies: Reading</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    )
  }
}

export default App

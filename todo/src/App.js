import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <TodoList />
        </header>
      </div>
    );
  }
}

export default App;

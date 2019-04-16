import React, { Component } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <TodoForm />
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete, addNewTodo } from '../actions';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  }

  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  }

  render(){
    return (
      <div>
        <h1>My List of Todos:</h1>

        {this.props.todos.map((todo, index) => (
          <h4 onClick={e => this.toggleComplete(e, index)} key={index}>
          {todo.value} {todo.completed && <i className="fas fa-dragon" />}
          </h4>))
        }
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add Todo..."
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect( mapStateToProps, { addNewTodo, toggleComplete })(TodoList);
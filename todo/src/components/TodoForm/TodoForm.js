import React, { Component } from 'react';
import Todo from '../Todos';


export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodo: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addNewTodo = e => {
        e.preventDefault();
        this.setState({ ...this.props, this.state.newTodo })
    }

    render(){
        return (
            <div>
                {this.props.todos.map((todo, id) => <Todo todo={todo} key={id} />)}
                <input
                    name='name'
                    type='text'
                    value={this.state.todos}
                    placeholder='add a todo...'
                    onChange={this.handleChange}
                />
                <button onclick={this.addNewTodo}>Add</button>
            </div>
        );
    }
}
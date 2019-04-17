import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        return ( 
            <div className='todo-list'>
                {this.props.todos.map((todo, i) => (
                    <h4 key={i} >
                        {todo.value && <i className="fas fa-dragon" />}
                    </h4>  
                ))}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    {})(TodoList);
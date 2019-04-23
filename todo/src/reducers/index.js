import { ADD_TODO, TOGGLE_COMPLETE } from "../actions";

const initialState = {
    todos: [{
        value: "Walk the dog",
        completed: false
    }]
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo, index) => action.payload === index ? {...todo, completed: !todo.completed } : todo )
            };
        default:
            return state;
    }
};
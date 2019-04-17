import { ADD_TODO } from '../actions/actions';

const initialState = {
    title: 'Todo List',
    todos: [{
        value: '',
        completed: false
    }]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                value: action.payload,
                completed: false
            };
            default:
            return state;
    }
}

export default reducer;
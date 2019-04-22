import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const cleanState = {};
      action.todos.forEach(element => {
        cleanState[element.id] = element;
      });
      return cleanState;
    case RECEIVE_TODO:
      let newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
import { Types } from './actions';
import { DefaultState, TodoState } from './state';
import { Reducer } from 'redux';

export const TodoReducer: Reducer<TodoState, Types.Type> = function (state = DefaultState, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return state;
    case Types.NEW_TODO:
      return { ...state, todos: [action.payload].concat(state.todos) };
    
    case Types.FETCH_TODOS:
      return { ...state, fetching: true };
    case Types.FETCH_TODOS_SUCCESS:
      return { ...state, fetching: false, todos: action.payload };
    case Types.FETCH_TODOS_FAILURE:
      return { ...state, fetching: false, todos: [] };

    case Types.REMOVE_TODO:
      return state;
    case Types.TODO_REMOVED:
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const todos = [...state.todos];
      todos[index] = action.payload;

      return { ...state, todos: todos };

    default:
      return state;
  }
};

export default TodoReducer;
import { TodoAction } from './actions';
import { DefaultState, TodoState } from './state';
import { Reducer } from 'redux';

export const TodoReducer: Reducer<TodoState, TodoAction.Type> = function (state = DefaultState, action) {
  switch (action.type) {
    case TodoAction.ADD_TODO:
      return state;
    case TodoAction.NEW_TODO:
      return { ...state, todos: [action.payload].concat(state.todos) };
    
    case TodoAction.FETCH_TODOS:
      return { ...state, fetching: true };
    case TodoAction.FETCH_TODOS_SUCCESS:
      return { ...state, fetching: false, todos: action.payload };
    case TodoAction.FETCH_TODOS_FAILURE:
      return { ...state, fetching: false, todos: [] };

    case TodoAction.REMOVE_TODO:
      return state;
    case TodoAction.TODO_REMOVED:
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const todos = [...state.todos];
      todos[index] = action.payload;

      return { ...state, todos: todos };

    default:
      return state;
  }
};

export default TodoReducer;
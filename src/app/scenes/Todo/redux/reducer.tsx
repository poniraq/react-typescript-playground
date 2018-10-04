import { DefaultState } from './state';
import { ActionType, TodoReducer as Reducer } from './types';

export const TodoReducer: Reducer = function (state = DefaultState, action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return state;
    case ActionType.NEW_TODO:
      return { ...state, todos: [action.payload].concat(state.todos) };
    
    case ActionType.FETCH_TODOS:
      return { ...state, fetching: true };
    case ActionType.FETCH_TODOS_SUCCESS:
      return { ...state, fetching: false, todos: action.payload };
    case ActionType.FETCH_TODOS_FAILURE:
      return { ...state, fetching: false, todos: [] };

    case ActionType.REMOVE_TODO:
      return state;
    case ActionType.TODO_REMOVED:
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const todos = [...state.todos];
      todos[index] = action.payload;

      return { ...state, todos: todos };

    default:
      return state;
  }
};

export default TodoReducer;
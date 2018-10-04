import { Actions } from './actions';
import { TodoReducer } from './reducer';
import { DefaultState } from './state';
import { Todo, TodoState } from './types';

const todo: Todo = { id: undefined, title: 'some_title' };

describe('TodoReducer', () => {
  const state = DefaultState;
  const reducer = TodoReducer;

  it('should return original state if no action is provided', () => {
    expect(reducer(state, {} as any)).toEqual(state);
  });
  it('should return original state if action is unhandled', () => {
    const action = {
      type: 'some_type',
      payload: 'some_paylaod'
    };

    expect(reducer(state, action as any)).toEqual(state);
  });

  it('should do nothing on ADD_TODO', () => {
    const action = Actions.AddTodo(todo);
    expect(reducer(state, action)).toEqual(state);
  });
  it('should add item on NEW_TODO', () => {
    const action = Actions.NewTodo(todo);
    expect(reducer(state, action).todos.length).toEqual(state.todos.length + 1);
  });


  it('should set "fetching" to true on FETCH_TODOS', () => {
    const action = Actions.FetchTodos();
    expect(reducer(state, action).fetching).toEqual(true);
  });
  it('should set "fetching" to false on FETCH_TODOS_SUCCESS', () => {
    const action = Actions.FetchTodosSuccess([todo]);
    expect(reducer(state, action).fetching).toEqual(false);
  });
  it('should replace "posts" with payload on FETCH_TODOS_SUCCESS', () => {
    const action = Actions.FetchTodosSuccess([todo]);
    expect(reducer(state, action).todos).toEqual([todo]);
  });

  it('should do nothing on REMOVE_TODO', () => {
    const action = Actions.RemoveTodo(todo);
    expect(reducer(state, action)).toEqual(state);
  });
  it('should replace todo with payload on TODO_REMOVED', () => {
    const action = Actions.TodoRemoved({ ...todo, id: 1, deleted: true });
    const oldState: TodoState = { ...state, todos: [{ ...todo, id: 1 }]};

    expect(reducer(oldState, action).todos.length).toEqual(oldState.todos.length);
    expect(oldState.todos[0].deleted).toBeFalsy();
    expect(reducer(oldState, action).todos[0].deleted).toBeTruthy();
  });

});
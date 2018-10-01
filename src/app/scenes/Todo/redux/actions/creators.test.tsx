import Creators from './creators';
import { Todo } from '../types';

const todo: Todo = { id: undefined, title: 'some_todo_title' };
const error = 'some_error';

describe('Creators', () => {
  describe('AddTodo', () => {
    const action = Creators.AddTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('NewTodo', () => {
    const action = Creators.NewTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual({...todo, id: action.payload.id });
    });
  });

  
  describe('FetchTodos', () => {
    const action = Creators.FetchTodos();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchTodosSuccess', () => {
    const action = Creators.FetchTodosSuccess([todo]);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todos" payload', () => {
      expect(action.payload).toEqual([todo]);
    });
  });

  describe('FetchTodosFailure', () => {
    const action = Creators.FetchTodosFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "error" payload', () => {
      expect(action.error).toEqual(error);
    });
  });


  describe('RemoveTodo', () => {
    const action = Creators.RemoveTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('TodoRemoved', () => {
    const action = Creators.TodoRemoved(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });
});

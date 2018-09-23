import { TodoAction } from './actions';
import { Todo } from './types';
// import { State } from './state';

// const title = 'some_title';
const todo: Todo = { id: undefined, title: 'some_todo_title' };
const error = 'some_error';
// const state:  = { title, todos, fet };

describe('TodoAction', () => {
  const title = 'some_title';

  describe('AddTodo', () => {
    const action = TodoAction.AddTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('NewTodo', () => {
    const action = TodoAction.NewTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual({...todo, id: action.payload.id });
    });
  });

  
  describe('FetchTodos', () => {
    const action = TodoAction.FetchTodos();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchTodosSuccess', () => {
    const action = TodoAction.FetchTodosSuccess([todo]);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todos" payload', () => {
      expect(action.payload).toEqual([todo]);
    });
  });

  describe('FetchTodosFailure', () => {
    const action = TodoAction.FetchTodosFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "error" payload', () => {
      expect(action.error).toEqual(error);
    });
  });


  describe('RemoveTodo', () => {
    const action = TodoAction.RemoveTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('TodoRemoved', () => {
    const action = TodoAction.TodoRemoved(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });
});

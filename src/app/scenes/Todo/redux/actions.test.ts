import Actions from './actions';
import { Todo } from './types';

const todo: Todo = { id: undefined, title: 'some_todo_title' };
const error = 'some_error';

describe('Actions', () => {
  describe('AddTodo', () => {
    const action = Actions.AddTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('NewTodo', () => {
    const action = Actions.NewTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual({...todo, id: action.payload.id });
    });
  });

  
  describe('FetchTodos', () => {
    const action = Actions.FetchTodos();

    it('creates without error', () => {
      expect(action).toBeDefined();
    });
  });

  describe('FetchTodosSuccess', () => {
    const action = Actions.FetchTodosSuccess([todo]);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todos" payload', () => {
      expect(action.payload).toEqual([todo]);
    });
  });

  describe('FetchTodosFailure', () => {
    const action = Actions.FetchTodosFailure(error);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "error" payload', () => {
      expect(action.error).toEqual(error);
    });
  });


  describe('RemoveTodo', () => {
    const action = Actions.RemoveTodo(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });

  describe('TodoRemoved', () => {
    const action = Actions.TodoRemoved(todo);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "todo" payload', () => {
      expect(action.payload).toEqual(todo);
    });
  });
});

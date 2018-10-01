import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { Creators, Types } from './actions';
import { TodoEpic } from './epic';
import { Todo } from './types';

const todo: Todo = { id: undefined, title: 'some_title' };

describe('TodoEpic', () => {
  describe('AddTodoEpic', () => {
    const action$ = new ActionsObservable(of(Creators.AddTodo(todo)));
    const epic = TodoEpic(action$, {} as any, {});

    it('emits NEW_TODO with todo payload', (done) => {
      epic.subscribe((action: Types.AddTodo) => {
        expect(action.payload).toEqual({ ...todo, id: action.payload.id });
        done();
      });
    });

    it('adds id to the payload', (done) => {
      epic.subscribe((action: Types.AddTodo) => {
        expect(todo.id).toBe(undefined);
        expect(action.payload.id).not.toEqual(todo.id);
        done();
      });
    });
  });

  describe('FetchTodoEpic', () => {
    const action$ = new ActionsObservable(of(Creators.FetchTodos()));
    const epic = TodoEpic(action$, {} as any, {});

    it('emits FETCH_TODOS_SUCCESS on success', (done) => {
      epic.subscribe((action: Types.FetchTodosSuccess) => {
        expect(action.payload.length).toBeGreaterThan(0);
        done();
      });
    });
  });

  describe('RemoveTodoEpic', () => {
    const action$ = new ActionsObservable(of(Creators.RemoveTodo(todo)));
    const epic = TodoEpic(action$, {} as any, {});

    it('emits TODO_REMOVED with correct payload', (done) => {
      epic.subscribe((action: Types.TodoRemoved) => {
        expect(todo.deleted).toBeFalsy();
        expect(action.payload.deleted).toBeTruthy();
        done();
      });
    });
  });
});
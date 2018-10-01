import { combineEpics, Epic, ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { Types, Creators } from './actions';
import { DefaultFetchTodos, TodoState } from './state';

import ActionType = Types.Type;

export const AddTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(Types.ADD_TODO),
    map((action: Types.AddTodo) => Creators.NewTodo({ ...action.payload, id: +(new Date()) })
  ));

export const FetchTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(Types.FETCH_TODOS),
    delay(1000),
    map((action: Types.FetchTodos) => Creators.FetchTodosSuccess(DefaultFetchTodos)
  ));

export const RemoveTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(Types.REMOVE_TODO),
    map((action: Types.RemoveTodo) => Creators.TodoRemoved({ ...action.payload, deleted: true })
  ));

export const TodoEpic = combineEpics(AddTodoEpic, FetchTodoEpic, RemoveTodoEpic);
export default TodoEpic;
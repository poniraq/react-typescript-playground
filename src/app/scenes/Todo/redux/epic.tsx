import { combineEpics, ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { Actions } from './actions';
import { ActionType, TodoEpic as Epic } from './types';
import { DefaultFetchTodos } from './state';

// ADD_TODO -> NEW_TODO
export const AddTodoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionType.ADD_TODO),
    map((action: ActionType.AddTodo) => Actions.NewTodo({ ...action.payload, id: +(new Date()) })
  ));

// FETCH_TODOS -> FETCH_TODOS_SUCCESS | FETCH_TODOS_FAILURE
export const FetchTodoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionType.FETCH_TODOS),
    delay(1000),
    map((action: ActionType.FetchTodos) => Actions.FetchTodosSuccess(DefaultFetchTodos)
  ));

// REMOTE_TODO -> TODO_REMOVED
export const RemoveTodoEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionType.REMOVE_TODO),
    map((action: ActionType.RemoveTodo) => Actions.TodoRemoved({ ...action.payload, deleted: true })
  ));

export const TodoEpic = combineEpics(AddTodoEpic, FetchTodoEpic, RemoveTodoEpic);
export default TodoEpic;
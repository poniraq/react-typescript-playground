import { combineEpics, Epic, ofType } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { TodoAction } from './actions';
import { DefaultFetchTodos, TodoState } from './state';

import ActionType = TodoAction.Type;

export const AddTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(TodoAction.ADD_TODO),
    map((action: TodoAction.AddTodo) => TodoAction.NewTodo({ ...action.payload, id: +(new Date()) })
  ));

export const FetchTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(TodoAction.FETCH_TODOS),
    delay(1000),
    map((action: TodoAction.FetchTodos) => TodoAction.FetchTodosSuccess(DefaultFetchTodos)
  ));

export const RemoveTodoEpic: Epic<ActionType, ActionType, TodoState> = (action$) =>
  action$.pipe(
    ofType(TodoAction.REMOVE_TODO),
    map((action: TodoAction.RemoveTodo) => TodoAction.TodoRemoved({ ...action.payload, deleted: true })
  ));

export const TodoEpic = combineEpics(AddTodoEpic, FetchTodoEpic, RemoveTodoEpic);
export default TodoEpic;
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoBodyComponent from '../components/TodoBody';

import { AppState } from '@redux';
import { Actions, ActionTypes } from '../redux';
import { Todo } from '../redux/types';
import * as s from '../redux/selectors';

export function mapStateToProps(state: AppState) {
  return {
    todos: s.todos(state),
    loading: s.fetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.All>) {
  return {
    fetch: () => dispatch(Actions.FetchTodos()),
    remove: (todo: Todo) => dispatch(Actions.RemoveTodo(todo))
  };
}

export const TodoBody = connect(mapStateToProps, mapDispatchToProps)(TodoBodyComponent);
export default TodoBody;
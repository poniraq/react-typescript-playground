import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoBodyComponent from '../components/TodoBody';

import * as selectors from '../redux/selectors';
import { Creators, Types } from '../redux/actions';
import { StoreState } from '../redux/state';
import { Todo } from '../redux/types';

export function mapStateToProps(state: StoreState) {
  return {
    todos: selectors.getTodos(state),
    loading: selectors.getTodosFetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<Types.Type>) {
  return {
    fetch: () => dispatch(Creators.FetchTodos()),
    remove: (todo: Todo) => dispatch(Creators.RemoveTodo(todo))
  };
}

export const TodoBody = connect(mapStateToProps, mapDispatchToProps)(TodoBodyComponent);
export default TodoBody;
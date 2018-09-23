import { RootAction, RootState, selectors } from '@redux';
import { TodoAction } from '@redux/todo/actions';
import { Todo } from '@redux/todo/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoBodyComponent from '../components/TodoBody';

export function mapStateToProps(state: RootState) {
  return {
    todos: selectors.getTodos(state),
    loading: selectors.getTodosFetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetch: () => dispatch(TodoAction.FetchTodos()),
    remove: (todo: Todo) => dispatch(TodoAction.RemoveTodo(todo))
  };
}

export const TodoBody = connect(mapStateToProps, mapDispatchToProps)(TodoBodyComponent);
export default TodoBody;
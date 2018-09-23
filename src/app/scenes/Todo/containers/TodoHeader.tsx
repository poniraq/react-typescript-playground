import { RootAction, RootState, selectors } from '@redux';
import { TodoAction } from '@redux/todo/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoHeaderComponent from '../components/TodoHeader';

export function mapStateToProps(state: RootState) {
  return {
    title: selectors.getTodoTitle(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
return {
    add: (title: string) => dispatch(TodoAction.AddTodo({ id: undefined, title }))
  };
}

export const TodoHeader = connect(mapStateToProps, mapDispatchToProps)(TodoHeaderComponent);
export default TodoHeader;
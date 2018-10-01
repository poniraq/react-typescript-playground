import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as selectors from '../redux/selectors';
import { Types, Creators } from '../redux/actions';
import { StoreState } from '../redux/state';
import TodoHeaderComponent from '../components/TodoHeader';

export function mapStateToProps(state: StoreState) {
  return {
    title: selectors.getTodoTitle(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<Types.Type>) {
return {
    add: (title: string) => dispatch(Creators.AddTodo({ id: undefined, title }))
  };
}

export const TodoHeader = connect(mapStateToProps, mapDispatchToProps)(TodoHeaderComponent);
export default TodoHeader;
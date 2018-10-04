import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoHeaderComponent from '../components/TodoHeader';

import { AppState } from '@redux';
import { Actions, ActionTypes } from '../redux';
import * as s from '../redux/selectors';

export function mapStateToProps(state: AppState) {
  return {
    title: s.title(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.All>) {
return {
    add: (title: string) => dispatch(Actions.AddTodo({ id: undefined, title }))
  };
}

export const TodoHeader = connect(mapStateToProps, mapDispatchToProps)(TodoHeaderComponent);
export default TodoHeader;
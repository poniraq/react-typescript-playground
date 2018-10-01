import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostForm from '../components/PostForm';

import { ActionCreators, ActionTypes } from '../redux';
import * as selectors from '../redux/selectors';
import { StoreState } from '../redux/state';
import { Post } from '../redux/types';

export function mapStateToProps(state: StoreState) {
    return { post: selectors.getNewPost(state) };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.Type>) {
  return {
    submit: (post: Post) => dispatch(ActionCreators.AddPost(post))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
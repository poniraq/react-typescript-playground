import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostForm from '../components/PostForm';

import { AppState } from '@redux';
import { Actions, ActionTypes } from '../redux';
import { Post } from '../redux/types';
import * as s from '../redux/selectors';

export function mapStateToProps(state: AppState) {
    return { post: s.newPost(state) };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.All>) {
  return {
    submit: (post: Post) => dispatch(Actions.AddPost(post))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
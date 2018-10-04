import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostList from '../components/PostList';

import { AppState } from '@redux';
import { Actions, ActionTypes } from '../redux';
import * as s from '../redux/selectors';

export function mapStateToProps(state: AppState) {
  return {
    posts: s.posts(state),
    error: s.error(state),
    loading: s.fetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.All>) {
  return {
    fetch: () => dispatch(Actions.FetchPosts())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
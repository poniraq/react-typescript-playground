import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostList from '../components/PostList';

import { ActionCreators, ActionTypes } from '../redux';
import * as selectors from '../redux/selectors';
import { StoreState } from '../redux/state';

export function mapStateToProps(state: StoreState) {
  return {
    posts: selectors.getPosts(state),
    error: selectors.getPostsError(state),
    loading: selectors.getPostsFetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<ActionTypes.Type>) {
  return {
    fetch: () => dispatch(ActionCreators.FetchPosts())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
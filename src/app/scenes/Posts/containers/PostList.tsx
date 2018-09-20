import PostList from '../components/PostList';
import { RootState, selectors } from '@redux';
import { Action } from '@redux/posts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: RootState) {
  return {
    posts: selectors.getPosts(state),
    error: selectors.getPostsError(state),
    loading: selectors.getPostsFetching(state)
  };
}
export function mapDispatchToProps(dispatch: Dispatch<Action.Type>) {
  return {
    fetch: () => dispatch(Action.FetchPosts())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
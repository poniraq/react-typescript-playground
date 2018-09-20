import { RootState, selectors } from '@redux';
import { Action, Post } from '@redux/posts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PostForm from '../components/PostForm';


export function mapStateToProps(state: RootState) {
    return { post: selectors.getNewPost(state) };
}
export function mapDispatchToProps(dispatch: Dispatch<Action.Type>) {
  return {
    submit: (post: Post) => dispatch(Action.AddPost(post))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
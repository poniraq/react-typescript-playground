import * as React from 'react';
import PostForm from './containers/PostForm';
import PostList from './containers/PostList';
import './Posts.scss';
import './redux/injector';


export default class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <PostForm />
        <h1 className="PostsTitle">POSTS</h1>
        <PostList />
      </div>
    );
  }
}

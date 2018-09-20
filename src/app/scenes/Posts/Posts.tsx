import * as React from "react";
import PostList from './containers/PostList';
import './Posts.scss';
import PostForm from '@app/scenes/Posts/containers/PostForm';

export default class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <PostForm />
        <br />
        <h1 className="PostsTitle">POSTS</h1>
        <PostList />
      </div>
    );
  }
}

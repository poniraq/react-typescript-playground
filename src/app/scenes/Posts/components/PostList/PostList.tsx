import * as React from "react";
import { Post } from '@redux/posts';
import './PostList.scss';

export interface Props {
  posts: Post[];
  error: string;
  loading: boolean;
  fetch: () => void;
}

export default class PostList extends React.Component<Props> {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const { posts, error, loading } = this.props;
    const postItems = posts.map((data) => (
      <div className="PostItem" key={data.id}>
        <p className="PostTitle">{data.title}</p>
        <p className="PostBody">{data.body}</p>
      </div>
    ));

    return (
      <div className="PostList">
        {error
          ? <h2>{error}</h2>
          : null}
        {loading 
          ? <div className="PostListMask">
              <p className="PostListMaskText">
                Loading...
              </p>
            </div>
          : null}
        { postItems }
      </div>
    );
  }
}

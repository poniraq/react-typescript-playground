import { Post } from '@redux/posts';
import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { LoadingMask, PosedComponent } from '@app/components';
import './PostList.scss';


export interface PostListProps {
  posts: Post[];
  error: string;
  loading: boolean;
  fetch: () => void;
}

const Mask = PosedComponent(LoadingMask, {
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const PostItem = posed.div({
  enter: { opacity: 1, x: 0, delay: ({ i }: { i: number }) => i * 50 },
  exit: { opacity: 0, x: -100 }
});

export default class PostList extends React.Component<PostListProps> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { posts, error, loading } = this.props;

    if (loading) {
      return (
        <Mask key="mask" size={96}/>
      );
    }

    const postItems = posts.map((data, index) => (
      <PostItem className="PostItem" key={data.id} i={index}>
        <p className="PostTitle">{data.title}</p>
        <p className="PostBody">{data.body}</p>
      </PostItem>
    ));

    return (
      <div className="PostList">
        {error && <h2>{error}</h2>}
        <PoseGroup animateOnMount={true}>
          { postItems }
        </PoseGroup>
      </div>
    );
  }
}

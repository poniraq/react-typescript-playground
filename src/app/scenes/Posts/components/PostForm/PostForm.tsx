import * as React from 'react';
import { Post } from '@redux/posts';
import './PostForm.scss';

interface Props {
  post: Post;
  submit: (post: Post) => void;
}

interface State {
  post: Post;
}

export default class PostForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      post: { ...props.post }
    };
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.submit(this.state.post);
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      post: { ...this.state.post, [e.target.name]: e.target.value }
    });
  }


  render() {
    return (
      <div className="PostFormHost">
        <h2 className="PostFormTitle">ADD POST</h2>
        <form className="PostFormBody" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} name="title"/>
          <input type="text" onChange={this.onChange} name="body"/>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

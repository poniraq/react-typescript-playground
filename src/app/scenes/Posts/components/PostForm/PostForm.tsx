import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { Post } from '../../redux/types';
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
        <Form className="PostFormBody" onSubmit={this.onSubmit}>
          <Input placeholder="Post Title" type="text" onChange={this.onChange} name="title"/>
          <Input placeholder="Post Body" type="text" onChange={this.onChange} name="body"/>
          <Button type="primary" htmlType="submit">SUBMIT</Button>
        </Form>
      </div>
    );
  }
}

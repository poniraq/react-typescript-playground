import * as React from 'react';
import './TodoHeader.scss';


interface Props {
  title: string;
  placeholder: string;
  add: (todo: string) => void;
}

interface State {
  todo: string;
}

export class TodoHeader extends React.Component<Props, State> {
  state = {
    todo: ''
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      todo: e.target.value
    });
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !!this.state.todo) {
      this.props.add(this.state.todo);
      this.setState({ todo: '' });
    }
  }

  render() {
    const { title, placeholder } = this.props;
    const { todo } = this.state;

    return (
      <header className="TodoHeader">
        <h3 className="TodoHeaderTitle">{title}</h3>
        <input className="TodoHeaderInput" type="text" placeholder={placeholder} value={todo} onChange={this.onChange} onKeyDown={this.onKeyDown} />
      </header>
    );
  }
}

export default TodoHeader;
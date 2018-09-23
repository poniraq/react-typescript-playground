import * as React from 'react';
import { Todo } from '@redux/todo/types';
import './TodoItem.scss';

interface Props {
  value: Todo;
  onRemove: (todo: Todo) => void;
}

export class TodoItem extends React.Component<Props> {
  onClick = () => {
    this.props.onRemove(this.props.value);
  }
  
  render() {
    const { value } = this.props;

    return (
      <li className="TodoItem" key={value.id}>
        <span className="content">
          {value.title}
        </span>
        <button onClick={this.onClick} className="remove-button">
          <i className="material-icons">close</i>
        </button>
      </li>
    );
  }
}
export default TodoItem;
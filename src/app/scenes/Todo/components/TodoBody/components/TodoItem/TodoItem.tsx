import * as React from 'react';
import { Todo } from '@redux/todo/types';
import './TodoItem.scss';

export type TodoItemRefType = HTMLLIElement;
export type TodoItemRef = React.Ref<TodoItemRefType>;
export interface TodoItemProps {
  value: Todo;
  onRemove: (todo: Todo) => void;
  forwardRef?: TodoItemRef;
}

class TodoItem extends React.Component<TodoItemProps> {
  onClick = () => {
    this.props.onRemove(this.props.value);
  }
  
  render() {
    const { value, forwardRef } = this.props;

    return (
      <li ref={forwardRef} className="TodoItem" key={value.id}>
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

const ForwardingTodoItem = React.forwardRef<TodoItemRefType, TodoItemProps>((props, ref) => (
  <TodoItem {...props} forwardRef={ref} />
));

export {
  ForwardingTodoItem as TodoItem,
  ForwardingTodoItem as default
};
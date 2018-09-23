import * as React from 'react';
import { TodoHeader, TodoBody } from './containers';
import './Todo.scss';

export class Todo extends React.Component {
  render() {
    return(
      <div className="TodoList">
        <TodoHeader placeholder="Add new todo..."/>
        <TodoBody />
      </div>
    );
  }
}

export default Todo;
import { Todo } from '@redux/todo/types';
import * as React from 'react';
import { TodoItem } from './components';
import './TodoBody.scss';


interface Props {
  todos: Todo[];
  loading: boolean;
  fetch: () => void;
  remove: (todo: Todo) => void;
}

export class TodoBody extends React.Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    let content: JSX.Element[];

    if (this.props.loading) {
      content = [(
        <div key="error" className="TodoBodyLoading">Loading...</div>
      )];
    } else {
      content = this.props.todos.filter((todo) => !todo.deleted).map((todo) => (
        <TodoItem key={todo.id} value={todo} onRemove={this.props.remove}/>
      ));
    }

    return (
      <ul className="TodoBody">
          {...content}
      </ul>
    );
  }
}

export default TodoBody;
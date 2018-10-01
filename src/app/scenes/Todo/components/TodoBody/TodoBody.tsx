import * as React from 'react';
import { PoseGroup } from 'react-pose';
import { PosedComponent } from '@app/components';
import { Todo } from '../../redux/types';
import { TodoItem } from './components';
import './TodoBody.scss';

interface Props {
  todos: Todo[];
  loading: boolean;
  fetch: () => void;
  remove: (todo: Todo) => void;
}

const PosedTodoItem = PosedComponent(TodoItem, {
  enter: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 }
});

export class TodoBody extends React.Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading } = this.props;

    return (
      <ul className="TodoBody">
        { loading ? (
          <div key="error" className="TodoBodyLoading">Loading...</div>
        ) : (
          <PoseGroup>
            { this.props.todos.filter((todo) => !todo.deleted).map((todo, index) => (
              <PosedTodoItem key={todo.id} value={todo} onRemove={this.props.remove} i={index}/>
            )) }
          </PoseGroup>
        ) }
      </ul>
    );
  }
}

export default TodoBody;
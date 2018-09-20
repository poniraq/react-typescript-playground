import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore as ReduxStore, Reducer, Store } from 'redux';
import { RootReducer, State, Action } from './root';

export function createStore(reducer: Reducer<State, Action>) {
  return ReduxStore(reducer);
}

export class StoreProvider extends React.Component {
  store: Store;

  componentWillMount() {
    this.store = createStore(RootReducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}
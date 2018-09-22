import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore as ReduxStore, Reducer, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootEpic, RootReducer, RootState } from './root';

export function createStore(reducer: Reducer<RootState, RootAction>) {
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const epicDependencies = {};
  const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });
  const middleware = [ epicMiddleware ];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
 
  const store = ReduxStore(reducer, enhancer);
  epicMiddleware.run(RootEpic);

  return store;
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
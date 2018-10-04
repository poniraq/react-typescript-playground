import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ReducerNode } from 'redux-reducers-injector';
import { AppEpic, AppReducer } from './root';
import { CreateStore } from './utils';


export function createStore(reducer: ReducerNode) {
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const epicDependencies = {};
  const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });
  const middleware = [ epicMiddleware ];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
 
  const store = CreateStore(reducer, enhancer);
  epicMiddleware.run(AppEpic);

  return store;
}

export class StoreProvider extends React.Component {
  store: Store;

  componentWillMount() {
    this.store = createStore(AppReducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.props.children}
      </Provider>
    );
  }
}
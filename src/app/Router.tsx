import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Posts from './scenes/Posts';
import Todo from './scenes/Todo';

export class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/todo" component={Todo} />
        <Redirect from="" to="/posts"  />
      </Switch>
    );
  }
}

export default Router;
import * as React from 'react';
import { ButtonLink } from '@app/components';
import { AppTitle } from '@app/containers';
import Router from '@app/scenes/Router';
import './App.scss';
import logo from './logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <AppTitle className="AppTitle" />

          <ButtonLink className="AppLink" to="/posts">POSTS</ButtonLink>
          <ButtonLink className="AppLink" to="/todo">TODO</ButtonLink>
        </header>
        <div className="AppContent">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;

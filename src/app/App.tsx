import * as React from 'react';
import './App.scss';
import Title from './containers/AppTitle';
import logo from './logo.svg';
import Router from './Router';
import ButtonLink from './components/ButtonLink';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <Title className="AppTitle" />

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

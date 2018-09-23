import * as React from 'react';
import './App.scss';
import Title from './containers/AppTitle';
import logo from './logo.svg';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <Title />
        </header>
        <div className="AppContent">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

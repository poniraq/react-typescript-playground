import * as React from 'react';
import './App.scss';
import Title from './containers/AppTitle';
import logo from './logo.svg';
import Posts from './scenes/Posts';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <img src={logo} className="AppLogo" alt="logo" />
          <Title />
        </header>
        <div className="AppContent">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;

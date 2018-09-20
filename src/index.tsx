import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import registerServiceWorker from './registerServiceWorker';
import { StoreProvider } from './redux';
import './index.scss';


ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

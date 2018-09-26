import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { StoreProvider } from './redux';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

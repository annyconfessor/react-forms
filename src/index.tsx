import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/reset.css'
import GlobalStyle from './screens/GlobalStyle';
import { setupInterceptors } from './services/axios/interceptors';
import instance from './services/axios';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

setupInterceptors(instance)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();

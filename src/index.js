import React from 'react';
import ReactDOM from 'react-dom/client';
import Forms from './screens/Forms.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>
);

reportWebVitals();

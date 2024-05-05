import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import '@mantine/core/styles.css';
import '@assets/globalStyle.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

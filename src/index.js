import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SongsProvider} from './context/SongsContext.js';

ReactDOM.render(
  <SongsProvider>
    <App></App>
  </SongsProvider>,

  document.getElementById('root')
);

reportWebVitals();

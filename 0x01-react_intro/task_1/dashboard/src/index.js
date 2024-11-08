import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

//cann't redeclare block-scope variable root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root-notifications = ReactDOM.createRoot(document.getElementById('root-notifications'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
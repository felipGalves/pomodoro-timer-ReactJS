import React from 'react';
import ReactDOM from 'react-dom';

// Main component
import App from './App';

// Selected task context
import { SelectedTaskProvider } from './context/SelectedTaskContext';

ReactDOM.render(
  <React.StrictMode>
    <SelectedTaskProvider>
      <App />
    </SelectedTaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

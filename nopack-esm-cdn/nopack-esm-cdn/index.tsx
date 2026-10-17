import * as React from 'https://esm.sh/react?dev';
import * as ReactDOM from 'https://esm.sh/react-dom/client?dev';
import App from './Components/App.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

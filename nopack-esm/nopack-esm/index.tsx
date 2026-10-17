import * as React from './es_modules/react/index.dev.mjs';
import * as ReactDOM from './es_modules/react-dom/client.dev.mjs';
import App from './Components/App.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OpenAi from './openai';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenAi />
  </React.StrictMode>
);


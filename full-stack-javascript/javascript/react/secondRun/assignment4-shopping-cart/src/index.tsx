import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// @ts-ignore
import MainRouter from './routers/MainRouter.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);

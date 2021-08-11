import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import ReactGA from 'react-ga';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Normalise.css';

import { ToolBarContextProvider }  from './contexts/ToolBarContext'

if(process.env.REACT_APP_SENTRY_URL) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}


ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "");
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <React.StrictMode>
    <ToolBarContextProvider>
      <App />
    </ToolBarContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { datadogRum } from '@datadog/browser-rum';

const DATADOG_APPLICATION_ID = '139d4946-a1a5-4d5f-b017-2422e7774b9d';
const DATADOG_CLIENT_TOKEN = 'puba9048a40434f456895695b2d552b9c5c';
const DATADOG_ENV = 'dev';

// Initialize Datadog RUM
datadogRum.init({
    applicationId: DATADOG_APPLICATION_ID,
    clientToken: DATADOG_CLIENT_TOKEN,
    site: 'datadoghq.com',
    service: 'goose',
    env: DATADOG_ENV,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
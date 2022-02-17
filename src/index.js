/*
index.js is used to render IbanValidationApp
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IbanValidationApp from './components/IbanValidationApp'

ReactDOM.render(
    <React.StrictMode>
      <IbanValidationApp />
    </React.StrictMode>,
      document.getElementById('iban-validation')
    );

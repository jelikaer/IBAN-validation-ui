/*
IbanValidationService.js is used for connection
with server through URL.
 */

import axios from 'axios';
import IBAN_VALIDATION_REST_API_URL from '../ServerURL.js';

class IbanValidationService{
  checkIbans(ibans){
      return axios.get(IBAN_VALIDATION_REST_API_URL + '?ibans=' + ibans);
  }
}

export default new IbanValidationService();

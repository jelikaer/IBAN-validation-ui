/*
IbanInputForm.js is used to create submitt button
with textbox where User writes IBANs for validation.
Example format of input is also given to User.
When button is clicked given IBANs are sent to IbanValidationApp.js.
*/

import React from 'react';

class IbanInputForm extends React.Component{
  constructor(props){
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var inputIban = this.textInput.value;
    if (inputIban.length > 0) {
      this.textInput.value = '';
      this.props.onNewIbans(inputIban);
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Write one or more IBAN to check them on validity</h3>
        <p>Example: EE38 2200 2210 2014 5685, GB98MIDL07009312345678, IE12BOFI 9000011234568... </p>
        <input type="text" ref={this.setTextInputRef} size="80"/>
        <button>Check IBAN</button>
      </form>
    )
  }
}

export default IbanInputForm;

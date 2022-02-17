/*
IbanValidationApp.js unites all main components of this App.
From first, it shows to user IbanInputForm with instructions.
When IBANs are set application then shows the output from server
which is procceeding in IbanValidationResult.js.
The "Back" button returns user to IbanInputForm.
*/

import React from 'react';
import IbanValidationService from '../services/IbanValidationService';
import IbanValidationResult from './IbanValidationResult';
import IbanInputForm from './IbanInputForm';

class IbanValidationApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ibans: '', ibanIsSet: false
    }
    this.handleNewIban = this.handleNewIban.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleNewIban(inputIban){
    this.setState({
      ibanIsSet: true
    })
    this.setIbanValidationResult(inputIban);
  }

  componentDidMount(){
    this.setIbanValidationResult('');
  }

  setIbanValidationResult(inputIban){
    if(inputIban.length){
      IbanValidationService.checkIbans(inputIban).then((response) => {
        this.setState({
          ibans: response.data
        })
      });
    }
  }

  handleBackClick() {
    this.setState({
      ibanIsSet: false
    })
  }

  render(){
    const ibanIsSet = this.state.ibanIsSet;
    return(
      <div>
        {ibanIsSet
          ? <div>
              <IbanValidationResult ibanStates={this.state.ibans}/>
              <button onClick={this.handleBackClick}>Back</button>
            </div>
          : <div>
              <h1>IBAN CHECKER </h1>
              <IbanInputForm onNewIbans={this.handleNewIban}/>
            </div>
        }
      </div>
    )
  }
}
export default IbanValidationApp;

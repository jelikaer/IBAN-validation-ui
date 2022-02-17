/*
IbanValidationResult.js process response from server.
If there is no responce the corresponding message is given.
*/

import React from 'react';

class IbanValidationResult extends React.Component{
  render(){
    var index = 0;
    var ibanStates = this.props.ibanStates;

    Array.isArray(ibanStates)
    const content = Array.isArray(ibanStates) ?
      ibanStates.map((ibanState) =>
        <div key={++index}>
          <p>{ibanState.iban}  <b>{ibanState.state}</b></p>
        </div>
      ) : 'No response from server...';

    return(
      <div>
        {content}
      </div>
    )
  }
}

export default IbanValidationResult;

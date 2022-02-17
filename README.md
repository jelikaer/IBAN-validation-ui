# IBAN VALIDATION REST API UI
This is User Interface made for REST API what aim is to validate International Bank Account Number (IBAN). Validation process is made according to instruction from [Wikipedia](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Algorithms).
This project consists only of frontend part. Backend written for this API locates at ...

### Used technologies for development, building and deployment
* Git 2.32.0
* Node JS 17.5.0 (UI part)

### Frontend installation and running guide
1. Clone repository using Git (here will be repository address)
 `git clone ...`
2. go to clone repository
3. By default server URL is 'http://localhost:8080/api/validate'. You can change this value at `ServerUrl.js/src/IBAN-validation-ui`
4. run `npm start`

### IBAN VALIDATION User manual guide
1. Open web site with installed IBAN-validation-ui application.
2. You will see simple interface with header "IBAN CHECKER", few lines of text, text box and `Check IBAN` button.
3. Type one or more IBANs you want to check into text box. According to the given example, your IBANs might contain whitespaces or not. So both  `EE38 2200 2210 2014 5685` and `EE382200221020145685` are acceptable. In case of multiple IBANs, please, separate them with coma.
4. press the `Check IBAN` button.
5. You will see your IBAN/IBANs written in a column one below the other with their states what might be `VALID` or `INVALID`.
6. Press the `Back` button to repeat process from step 2.
# IBAN VALIDATION web user interface
This is User Interface made for REST API with goal to validate International Bank Account Number (IBAN). Validation process is made according to instruction from [Wikipedia](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Algorithms).
This project consists only of frontend part. Backend written for this API locates at `https://github.com/jelikaer/IBAN-validation.git`.

### Used technologies for development, building and deployment
* Git 2.32.0
* Node JS 17.5.0 (UI part)

### Frontend installation and running guide
1. Clone repository using Git
 `git clone https://github.com/jelikaer/IBAN-validation-ui.git`
2. Go to the cloned repository local folder with name "IBAN-validation-ui"
3. By default this web user interface use endpoint with URL `http://localhost:8080/api/validate`. You can change this URL at `IBAN-validation-ui/src/ServerUrl.js`
4. Run `npm start`

### IBAN VALIDATION User manual guide
1. Open web site with installed IBAN-validation-ui application.
2. You will see simple interface with header "IBAN CHECKER", few lines of text, text box and `Check IBAN` button.
3. Type one or more IBANs you want to check into text box. According to the given example, your IBANs might contain whitespaces or not. So both  `EE38 2200 2210 2014 5685` and `EE382200221020145685` are acceptable. In case of multiple IBANs, please, separate them with coma.
4. press the `Check IBAN` button.
5. You will see your IBAN/IBANs written in a column one below the other with their states what might be `VALID` or `INVALID`.
6. Press the `Back` button to repeat process from step 2.

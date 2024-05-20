// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('resetDB', () => {

    cy.visit('/')
    cy.xpath(loc.ADMIN.XP_ADMIN_PAGE).click()
    cy.xpath(loc.ADMIN.XP_BTN_CLEAN_DATABASE).click()

})

Cypress.Commands.add('registerUser', (fn, ln, address, city, state, zipCode, phone, ssn, userName, psswd, cPsswd) => {

    cy.xpath(loc.LOGIN.XP_BTN_REGISTER).click()
    cy.title().should('eq', 'ParaBank | Register for Free Online Account Access')
    cy.xpath(loc.REGISTER.XP_FIRST_NAME).type(fn)
    cy.xpath(loc.REGISTER.XP_LAST_NAME).type(ln)
    cy.xpath(loc.REGISTER.XP_ADRESS).type(address)
    cy.xpath(loc.REGISTER.XP_CITY).type(city)
    cy.xpath(loc.REGISTER.XP_STATE).type(state)
    cy.xpath(loc.REGISTER.XP_ZIP_CODE).type(zipCode)
    cy.xpath(loc.REGISTER.XP_PHONE_NUMBER).type(phone)
    cy.xpath(loc.REGISTER.XP_SSN).type(ssn)
    cy.xpath(loc.REGISTER.XP_USERNAME).type(userName)
    cy.xpath(loc.REGISTER.XP_PASSWORD).type(psswd)
    cy.xpath(loc.REGISTER.XP_PASSWORD_CONFIRM).type(cPsswd)

    cy.xpath(loc.REGISTER.XP_BTN_REGISTER).click()

})

Cypress.Commands.add('login', (username, password) => {

    cy.xpath(loc.LOGIN.XP_USERNAME).type(username)
    cy.xpath(loc.LOGIN.XP_PASSWORD).type(password)
    cy.xpath(loc.LOGIN.XP_BTN_LOG_IN).click()

})


Cypress.Commands.add('loginAuto', (username, password) => {

    cy.visit('/')
    cy.xpath(loc.LOGIN.XP_USERNAME).type(username)
    cy.xpath(loc.LOGIN.XP_PASSWORD).type(password)
    cy.xpath(loc.LOGIN.XP_BTN_LOG_IN).click()

})

Cypress.Commands.add('openNewAccount', (type) => {


    cy.xpath(loc.SERVICES.XP_NEW_ACCOUNT).click()
    cy.title().should('eq', 'ParaBank | Open Account')
    cy.xpath(loc.NEW_ACCOUNT.XP_TYPE_ACCOUNT).select(type)
    cy.xpath(loc.NEW_ACCOUNT.XP_ACCOUNT_TRANSFER).select(0)

    cy.xpath(loc.NEW_ACCOUNT.XP_BTN_OPEN_NEW_ACCOUNT).click()

})


Cypress.Commands.add('overviewAccount', (numAccount, month, type) => {

    cy.xpath(loc.SERVICES.XP_OVERVIEW).click()
    cy.title().should('eq', 'ParaBank | Accounts Overview')
    if(numAccount === undefined || numAccount === null) {
        cy.xpath(loc.OVERVIEW.XP_ACCOUNT).click()
    } else {
        cy.xpath(loc.OVERVIEW.FN_XP_ID_ACCOUNT(numAccount)).click()
    }
    cy.title().should('eq', 'ParaBank | Account Activity')
    cy.xpath(loc.OVERVIEW.XP_ACTIVITY_PERIOD).select(month)
    cy.xpath(loc.OVERVIEW.XP_TYPE).select(type)
    cy.xpath(loc.OVERVIEW.XP_BTN_GO).click()

})

Cypress.Commands.add('transferFunds', (funds) => {

    cy.xpath(loc.SERVICES.XP_TRANSFER_FUNDS)
        .click()
    cy.title().should('eq', 'ParaBank | Transfer Funds')
    cy.xpath(loc.TRANSFER_FUNDS.XP_AMOUNT).type(funds)
    cy.xpath(loc.TRANSFER_FUNDS.XP_FROM_ACCOUNT).select(0)
    cy.xpath(loc.TRANSFER_FUNDS.XP_TO_ACCOUNT).select(0)
    cy.xpath(loc.TRANSFER_FUNDS.XP_BTN_TRANSFER).click()

})




Cypress.Commands.add('billPay', (payeeName, adress, city, state, zipCode, phone, account, verifyAccount, amount) => {

    cy.xpath(loc.SERVICES.XP_BILL_PAY).click()
    cy.xpath(loc.BILL.XP_PAYEE_NAME).type(payeeName)
    cy.xpath(loc.BILL.XP_ADRESS).type(adress)
    cy.xpath(loc.BILL.XP_CITY).type(city)
    cy.xpath(loc.BILL.XP_STATE).type(state)
    cy.xpath(loc.BILL.XP_ZIP_CODE).type(zipCode)
    cy.xpath(loc.BILL.XP_PHONE_NUMBER).type(phone)
    cy.xpath(loc.BILL.XP_ACCOUNT).type(account)
    cy.xpath(loc.BILL.XP_VERIFY_ACCOUNT).type(verifyAccount)
    cy.xpath(loc.BILL.XP_AMOUNT).type(amount)
    cy.xpath(loc.BILL.XP_SELECT_FACCOUNT).select(0)
    cy.xpath(loc.BILL.XP_BTN_SEND_PAYMENT).click()

})


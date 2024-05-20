/// <references types="cypress" />

import loc from '../support/locators'

describe('ParaBank - Register', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  before(() => {
    cy.resetDB()
  })

  it('Should register an user', () => {

    cy.registerUser('Teste', 'Teste', 'Nothing', 'New York', 'New York', '00000000', '0000000000', '000000000', 'teste', '1234', '1234')
    cy.title().should('eq', 'ParaBank | Customer Created')

  })

  it('Should not register an user - Field(s) required', () => {

    cy.xpath(loc.LOGIN.XP_BTN_REGISTER).click()
    cy.xpath(loc.REGISTER.XP_BTN_REGISTER).click()
    cy.xpath(loc.REGISTER.XP_ERROR).should('contain', 'is required')

  })

  it('Should not register an user - Username already exists', () => {

    cy.registerUser('Teste', 'Teste', 'Nothing', 'New York', 'New York', '00000000', '0000000000', '000000000', 'teste', '1234', '1234')
    cy.xpath(loc.REGISTER.XP_ERROR).should('have.text', 'This username already exists.')

  })

  it('Should not register an user - Passwords are not same', () => {

    cy.registerUser('Teste', 'Teste', 'Nothing', 'New York', 'New York', '00000000', '0000000000', '000000000', 'teste', '123', '12345')
    cy.xpath(loc.REGISTER.XP_ERROR).should('have.text', 'Passwords did not match.')

  })
})

describe('ParaBank - Login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in', () => {

    cy.login('teste', '1234')
    cy.title().should('eq', 'ParaBank | Accounts Overview')

  })

  it('Should not log in with the wrong username / password', () => {

    cy.login('teste', 'sadasd')
    cy.title().should('eq', 'ParaBank | Error')
    cy.xpath(loc.LOGIN.XP_ERROR).then($el => {
      if($el.text() === 'The username and password could not be verified.') {
        expect($el).to.have.text('The username and password could not be verified.')
      } else {
        expect($el).contain.text('An internal error has occurred and has been logged.')
      }
    })
      

  })
  
})

describe('ParaBank - Services', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login('teste', '1234')
  })

  it('Should open new account', () => {

    cy.openNewAccount('SAVINGS')
    cy.title().should('eq', 'ParaBank | Open Account')

  })

  it('Should see account overview - No Transactions', () => {

    cy.overviewAccount(undefined, 'All', 'All')
    cy.xpath(loc.OVERVIEW.XP_NO_TRANSACTIONS).should('contain', 'No transactions found.')

  })

  it('Should transfer funds', () => {

    cy.transferFunds('1200', '13455', '13455')
    cy.xpath(loc.XP_TITLE).should('contain', 'Transfer Complete!')


  })

  it('Should see account overview - With Transactions', () => {

    cy.overviewAccount('13455', 'All', 'All')
    cy.xpath(loc.OVERVIEW.XP_TRANSACTIONS).should('contain', 'Funds Transfer Sent')

  })

  it('Should pay a bill', () => {

    cy.billPay('Teste', 'Nothing', 'New York', 'New York', '00000000', '0000000000', '13455', '13455', '1200,0')


  })


})
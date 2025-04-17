/// <reference types="cypress" />

describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('http://on.fiap.com.br/')
    
    cy.title().should('eq', 'FIAP EAD - Login')

    
  })
})
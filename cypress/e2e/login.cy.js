/// <reference types="cypress" />

describe('Realizar Login', ()=> {

    it('Deve realizar Login Válido', () => {
        cy.visit('http://www.advantageonlineshopping.com/#/')

        cy.get('#menuUser').click()

        cy.get('input[name="username"]')
            .type('Markola')

        cy.get('input[name="password"]')
            .type('Zebra@2025')

        cy.get('#sign_in_btn').click()
               
        

    })

})
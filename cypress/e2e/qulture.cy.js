/// <reference types="cypress" />

describe('campo usuario', ()=> {

    it('Deve realizar login', () => {
    cy.visit('http://app.qulture.rocks/users/sign_in')
        
        
        cy.get('[href="/users/sso_sign_in"]').click()

        cy.get('#company-name')
            .type('Inmetrics')

        cy.get('#submit-sso').click()

        cy.get('input[type="submit"]').click()
            
                

    })

})
/// <reference types="cypress" />

describe('Realizar Busca', ()=> {

    it('Deve realizar Busca', () => {
        cy.visit('http://www.advantageonlineshopping.com/#/')
               
        cy.get('#headphonesLink').click()

        cy.get('#15').click()

        cy.get('.fixedBtn > .roboto-medium').click()

        cy.get('#shoppingCartLink').click()

        cy.get('#checkOutButton').click()

        cy.get('#registration_btn').click()

        cy.get('input[name="usernameRegisterPage"]')
            .type('Markola')

        cy.get('input[name="emailRegisterPage"]')
            .type('mpafonso@inmetrics.com.br')

        cy.get('input[name="passwordRegisterPage"]')
            .type('Zebra@2025')

        cy.get('input[name="confirm_passwordRegisterPage"]')
            .type('Zebra@2025', { force: true })

        cy.get('input[name="first_nameRegisterPage"]')
            .type('Markola')
        
        cy.get('input[name="last_nameRegisterPage"]')
            .type('Testando Automação')

        cy.get('input[name="phone_numberRegisterPage"]')
            .type('11982879649')

        cy.get('select[name="countryListboxRegisterPage"]')
            .select('United States')

        cy.get('input[name="cityRegisterPage"]')
            .type('Springfield')

        cy.get('input[name="addressRegisterPage"]')
            .type('1234 Maple Avenue')

        cy.get('input[name="state_/_province_/_regionRegisterPage"]')
            .type('IL', { force: true })

        cy.get('input[name="postal_codeRegisterPage"]')
            .type('62704')

        cy.get('input[name="i_agree"]').click()

        cy.get('#register_btn').click()

    })

})
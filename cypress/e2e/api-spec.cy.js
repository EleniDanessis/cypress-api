/// <reference types="Cypress" />

describe('REST API TEST WITH CYPRESS', () => {

    // it('API Test-Headers Validation', () => {

    //     cy.request('https://pokeapi.co/api/v2/pokemon/5').as('pokemon')

    //     cy.get('@pokemon').its('headers').its('content-type')
    //     .should('include','applilcation/json; charset=utf-8')

    // })

    it('API Test-Status Validation', () => {

        cy.request('https://pokeapi.co/api/v2/pokemon/5').as('pokemon')

        cy.get('@pokemon').its('status')
        .should('equal', 200)

    })

})
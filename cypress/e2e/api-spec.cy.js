/// <reference types="Cypress" />

describe('REST API TEST WITH CYPRESS', () => {

    // it('API Test-Headers Validation', () => {

    //     cy.request('https://pokeapi.co/api/v2/pokemon/78').as('pokemon')

    //     cy.get('@pokemon').its('headers').its('content-type')
    //     .should('include','applilcation/json; charset=utf-8')

    // })

    it('API Test-Status Validation', () => {

        cy.request('https://pokeapi.co/api/v2/pokemon/78').as('pokemon')

        cy.get('@pokemon').its('status')
        .should('equal', 200)

    })

    it('API Test-validate name value', () => {

        cy.request('https://pokeapi.co/api/v2/pokemon/78').as('pokemon')

        cy.get('@pokemon').its('body')
        .should('include', {name:'rapidash'})

    })

})
require('cypress-xpath')

describe('Pipeline 01', () => {
    it('Prueba paralelismo 04', () => {

        cy.viewport(1360, 768)
        cy.visit('www.google.com')
        cy.title('eq','Google')

    })
})
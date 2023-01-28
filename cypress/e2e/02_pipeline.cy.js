require('cypress-xpath')

describe('Pipeline 01', () => {
    it('Prueba paralelismo 02', () => {

        cy.viewport(1360, 768)
        cy.visit('www.youtube.com')
        cy.title('eq','YouTube')

    })
})
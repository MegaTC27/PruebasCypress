require('cypress-xpath')

describe('Pipeline 01', () => {
    it('Prueba paralelismo 04', () => {

        cy.viewport(1360, 768)
        cy.visit('https://www.twitch.tv')
        cy.title('eq','Twitch')

    })
})
require('cypress-xpath')

describe('Pipeline 01', () => {
    it('Prueba paralelismo 03', () => {

        cy.viewport(1360, 768)
        cy.visit('https://www.udemy.com')
        cy.title('eq','Cursos en línea: Aprende de todo y a tu propio ritmo | Udemy')

    })
})
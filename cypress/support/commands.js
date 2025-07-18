import * as sql from '../fixtures/insert'
// -- This is a parent command --
 Cypress.Commands.add('insert', () => {
    cy.task('sqlServer', sql.insert())

 })

import * as script from '../fixtures/db'

Cypress.Commands.add('InsertTable', () => {
    cy.sqlServer(script.InsertTable())
})

Cypress.Commands.add('UpdateTable', () => {
    cy.sqlServer(script.UpdateTable())
})

Cypress.Commands.add('DeleteTable', () => {
    cy.sqlServer(script.DeleteTable())
})

Cypress.Commands.add('SelectTable', () => {
    cy.task('sqlServer',script.SelectTable())
})
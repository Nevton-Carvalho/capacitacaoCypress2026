/// <reference types="cypress" />

describe('Acessar google',() => {
  it('Deve acessar o google', () => {
    cy.visit('https://www.google.com')
  })
})
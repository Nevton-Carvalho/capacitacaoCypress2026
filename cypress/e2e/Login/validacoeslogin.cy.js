/// <reference types="cypress" />

describe('Biblioteca - Validar Login',() => {

  it('Validar login com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#login-email').type('qa@biblioteca.com')
    cy.get('[data-cy="login-password"]').type('Cypress123!')
    cy.get('button[data-cy="login-submit"]').click()
  })

  it('Cadastro de usuário', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('[data-cy="tab-register"]').click(); 
    cy.get('[data-cy="register-name"]').click();
    cy.get('[data-cy="register-name"]').type('Nevton Carvalho');
    cy.get('[data-cy="register-email"]').type('ndavid@minsait.com');
    cy.get('[data-cy="register-password"]').type('Teste10');
    cy.get('[data-cy="register-confirm-password"]').type('Teste10');
    cy.get('[data-cy="register-phone"]').type('61984316078');
    cy.get('[data-cy="register-profile"]').select('colaborador');
    cy.get('[data-cy="register-terms"]').check();
    cy.get('[data-cy="register-submit"]').click();
  });

})
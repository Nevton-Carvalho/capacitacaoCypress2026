/// <reference types="cypress" />

describe('Validações da página de Cadastro de Livros', () => {

    //Realizar Login
    beforeEach(() => {
        cy.visit('/')

    });

    it('Validar login com sucesso', () => {
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text', 'QA Demonstração')
        cy.get('button').contains('Cadastrar livro').click()
        cy.get('div[id="view-book-form"] > h2').should('have.text','Cadastrar livro')
        
    });
     
    it('Cadastrar novo livro de Ação', () => {
        cy.get('[data-cy="book-title"]').type('Matrix')
        cy.get('[data-cy="book-author"]').click()
        cy.get('[data-cy="book-author"]').type('Pedro')
        cy.get('[data-cy="book-isbn"]').click()
        cy.get('[data-cy="book-isbn"]').type('Teste')
        cy.get('[data-cy="book-category"]').select('Ação')
        cy.get('[data-cy="book-year"]').click()
        cy.get('[data-cy="book-year"]').type('2026')
        cy.get('[data-cy="book-quantity"]').click()
        cy.get('[data-cy="condition-good"]').check()
        cy.get('[data-cy="book-featured"]').check()
        cy.get('[data-cy="book-message"]').should('have.text', 'Livro cadastrado com sucesso!')
    });

        
});



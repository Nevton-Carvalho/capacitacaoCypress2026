/// <reference types="cypress" />

describe('Biblioteca - Validar Login',() => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/index.html');
    });

  it('Validar login com sucesso', () => {
    cy.get('#login-email').type('qa@biblioteca.com')
    cy.get('[data-cy="login-password"]').type('Cypress123!')
    cy.get('button[data-cy="login-submit"]').click()
    //Validar se a tela inicial de aplicação é exibida
    cy.get('[data-cy="current-user"]').should('be.visible')
    cy.get('[data-cy="current-user"]').should('have.text', 'QA Demonstração')
  })

  it('Cadastro de usuário', () => {  
    cy.get('[data-cy="tab-register"]').click(); 
    cy.get('[data-cy="register-name"]').type('Nevton Carvalho');
    cy.get('[data-cy="register-email"]').type('ndavid@minsait.com');
    cy.get('[data-cy="register-password"]').type('Teste10');
    cy.get('[data-cy="register-confirm-password"]').type('Teste10');
    cy.get('[data-cy="register-phone"]').type('61984316078');
    cy.get('[data-cy="register-profile"]').select('colaborador');
    cy.get('[data-cy="register-terms"]').check();
    cy.get('[data-cy="register-submit"]').click();
    //Ao clicar a conta sistem deve 
    cy.get('[data-cy="register-message"]').should('have.text', 'Cadastro realizado com sucesso! Você já pode entrar.');
   });

  it.only('Realizar login com E-mail Inválido', () => {   
    cy.get('#login-email').type('nevton@gmail.com')
    cy.get('[data-cy="login-password"]').type('Cypress123!')
    cy.get('button[data-cy="login-submit"]').click()
    //Então mensagem de e-mail/senha inválida deve estar visivel
    cy.get('div[class="notice show error"]').should('be.visible')
    //Validar se contas e texto E-mail ou senha 
    cy.get('#login-msg').should('have.text', 'E-mail ou senha inválidos.')   
  });

  it('Realizar o Logout', () => {
    cy.get('#login-email').type('qa@biblioteca.com')
    cy.get('[data-cy="login-password"]').type('Cypress123!')
    cy.get('button[data-cy="login-submit"]').click()
    cy.get('[data-cy="current-user"]').should('be.visible')
    cy.get('[data-cy="logout-button"]').click()
    cy.get('div[id="login-panel"] > h2').should('have.text', 'Acesse sua conta')
    
  });

})
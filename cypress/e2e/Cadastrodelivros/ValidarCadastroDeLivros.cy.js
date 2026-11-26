/// <reference types="cypress" />

 describe('Validações da página de Cadastro de Livros', () => {

    //Realizar Login
   
    beforeEach(() => {
        cy.visit('/index.html')
        //it('Realizar login válido usando o fixtures', () => {
        cy.fixture('usuarios').then((massaDados) =>{
          const usuario = massaDados["valido"];
          cy.get('#login-email').type(usuario.email)
          cy.get('[data-cy="login-password"]').type(usuario.senha)
          cy.get('button[data-cy="login-submit"]').click()

    })
          //Validar se a tela inicial de aplicação é exibida
          cy.get('[data-cy="current-user"]').should('be.visible')
          cy.get('[data-cy="current-user"]').should('have.text', 'QA Demonstração')
          cy.get('button').contains('Cadastrar livro').click()
          cy.get('div[id="view-book-form"] > h2').should('have.text','Cadastrar livro')
     
  });

/*
        cy.get('#login-email').type('qa@biblioteca.com')
        cy.get('[data-cy="login-password"]').type('Cypress123!')
        cy.get('button[data-cy="login-submit"]').click()
        cy.get('[data-cy="current-user"]').should('be.visible')
        cy.get('[data-cy="current-user"]').should('have.text', 'QA Demonstração')
        cy.get('button').contains('Cadastrar livro').click()
        cy.get('div[id="view-book-form"] > h2').should('have.text','Cadastrar livro')
            
    });
    */

    xit('Cadastrar novo livro de Ação', () => {
        cy.get('[data-cy="book-title"]').type('Matrix')        
        cy.get('[data-cy="book-author"]').type('Pedro')
        cy.get('[data-cy="book-isbn"]').type('123456')       
        cy.get('[data-cy="book-category"]').select('Ficção')
        cy.get('[data-cy="book-category"]').should('have.value','Ficção')
        cy.get('[data-cy="book-year"]').type('2026')
        //cy.get('[data-cy="book-quantity"]').clear()
        cy.get('[data-cy="book-quantity"]').clear().type('5')
        cy.get('[data-cy="book-quantity"]').should('have.value','5')
        cy.get('[data-cy="condition-good"]').check()
        cy.get('[data-cy="condition-good"]').should('be.checked')
        cy.get('[data-cy="book-featured"]').check()
        cy.get('[data-cy="book-featured"]').should('be.checked')
        //cy.get('button[data-cy="book-save"]').click()
        cy.get('button').contains('Salvar l ivro').click()
        cy.get('[data-cy="book-message"]').should('have.text', 'Livro cadastrado com sucesso!')
        //Criar validação de uma tabela
    });

    it('Cadastar um novo Livro usando o fixtures', () => {
        cy.fixture('livros').then((listaDelivros) =>{
            const livro = listaDelivros["livro1"];
                cy.get('[data-cy="book-title"]').type(livro.titulo)        
                cy.get('[data-cy="book-author"]').type(livro.autor)
                cy.get('[data-cy="book-isbn"]').type(livro.ISBN)       
                cy.get('[data-cy="book-category"]').select(livro.categoria)
                cy.get('[data-cy="book-category"]').should('have.value',livro.categoria)
                cy.get('[data-cy="book-year"]').type(livro.ano)
                cy.get('[data-cy="book-quantity"]').clear()
                cy.get('[data-cy="book-quantity"]').clear().type(livro.quantidade)
                cy.get('[data-cy="book-quantity"]').should('have.value','5')

        })
                cy.get('[data-cy="condition-good"]').check()
                cy.get('[data-cy="book-featured"]').check()
                cy.get('[data-cy="book-featured"]').should('be.checked')
                //cy.get('button[data-cy="book-save"]').click()
                cy.get('button').contains('Salvar livro').click()
                cy.get('[data-cy="book-message"]').should('have.text', 'Livro cadastrado com sucesso!')
                //Criar validação de uma tabela
    });

})
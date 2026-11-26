/// <reference types="cypress" />

import CadastroDeLivroPage from "../../support/pages/cadastrodeLivroPage";
import loginPage from "../../support/pages/loginPage";
import usuarioPage from "../../support/pages/usuarioPage";

describe('Cadastro de Livro usando page objects', () => {
    const cadastroDeLivroPage = new CadastroDeLivroPage();
    const login = new loginPage();
    const usuario = new usuarioPage();

    beforeEach(() => {
        cy.visit('/index.html');
    });

    it('Realizar Logout', () => {
        cy.fixture('usuarios').then((massaDados) =>{
            const usuario = massaDados["valido"];         
            login.preencherCampoEmail(usuario.email)
            login.preencherCampoSenha(usuario.senha)
        })
        login.clicarNoBotaoEntrar()
        usuario.validarUsuarioLogado("usuario")
        //usuario.clicarBotaoSair()        
    })

    it('Cadastrar novo Livro de Romance', () => {
        cy.fixture('livros').then((massaDados) =>{
            const livro = massaDados["romance"];
            cy.visit('/index.html');
            cy.get('#menu-cadastrar').click();
            cy.get('#titulo').type(livro.titulo);
            cy.get('#autor').type(livro.autor);
            cy.get('#preco').type(livro.preco);
            cy.get('#categoria').select(livro.categoria);
        })
            cy.get('#cadastrar').click();
            cy.get('span[class="success"]').should('have.text', "Livro cadastrado com sucesso!");
        


    })

})
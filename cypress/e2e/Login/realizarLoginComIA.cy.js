/// <reference types="cypress" />

import LoginPage from '../../support/pages/loginPage'
import PortalPage from '../../support/pages/portalPage'
import BuscaDeLivrosPage from '../../support/pages/buscaDeLivrosPege'

describe('Realizar login na Biblioteca QA', () => {
    const loginPage = new LoginPage()
    const portalPage = new PortalPage()
    const buscaDeLivrosPage = new BuscaDeLivrosPage()

    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('Deve realizar login com credenciais válidas', () => {
        cy.fixture('usuarios').then((massaDados) => {
            const usuario = massaDados.valido

            loginPage.preencherCampoEmail(usuario.email)
            loginPage.preencherCampoSenha(usuario.senha)
        })

        loginPage.clicarNoBotaoEntrar()

        portalPage.validarUsuarioLogado('QA Demonstração')
        cy.get('#app').should('be.visible')
    })

    xit('Deve exibir mensagem quando o login é inválido', () => {
        cy.fixture('usuarios').then((massaDados) => {
            const usuario = massaDados.invalido

            loginPage.preencherCampoEmail(usuario.email)
            loginPage.preencherCampoSenha(usuario.senha)
        })

        loginPage.clicarNoBotaoEntrar()

        cy.get('[data-cy="login-message"]')
            .should('be.visible')
            .and('have.text', 'E-mail ou senha inválidos.')
    })

    it('Deve acessar o menu Livros após realizar login', () => {
        cy.fixture('usuarios').then((massaDados) => {
            const usuario = massaDados.valido

            loginPage.preencherCampoEmail(usuario.email)
            loginPage.preencherCampoSenha(usuario.senha)
        })

        loginPage.clicarNoBotaoEntrar()

        portalPage.validarUsuarioLogado('QA Demonstração')
        buscaDeLivrosPage.clicarMenuLivros()
        buscaDeLivrosPage.validarMenuLivros()
        buscaDeLivrosPage.validarTabelaLivros()
        buscaDeLivrosPage.validarCabecalhosTabelaLivros()
        buscaDeLivrosPage.validarDadosLinhasLivros()
        buscaDeLivrosPage.filtrarLivros('Código Limpo', 'yes')
        buscaDeLivrosPage.validarResultadoLivroDisponivel('Código Limpo')
    })
})

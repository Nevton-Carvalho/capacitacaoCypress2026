/// <reference types="cypress" />

import LoginPage from "../../support/pages/loginPage";
describe('Validar campos Obigatorios',() => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('/index.html');
    })

    it('Validar Campos Email obigatórios', () => {
        //loginPage.preencherCampoEmail("")
        loginPage.preencherCampoSenha("Cypress123!")
        loginPage.clicarNoBotaoEntrar()
        loginPage.validarEmailObrigatorio()
                
    })

    it('Validar Campos Senha obigatórios', () => {
        loginPage.preencherCampoEmail("qa@biblioteca.com")
       // loginPage.preencherCampoSenha("Cypress123!")
        loginPage.clicarNoBotaoEntrar()
        loginPage.validarMenssagemCampoObrigatorio("msg")
                
    })
})
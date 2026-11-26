  /// <reference types="cypress" />

import LoginPage from "../../support/pages/loginPage";
import PortalPage from "../../support/pages/portalPage";

describe('Validar o login usado no Page Object',() => {
    const loginPage = new LoginPage()
    const portalPage = new PortalPage()

    beforeEach(() => {
        cy.visit('/index.html');
    });

      it('Realizar o Logout', () => {
        cy.fixture('usuarios').then((massaDados) =>{
          const usuario = massaDados["valido"];         
          loginPage.preencherCampoEmail(usuario.email)
          loginPage.preencherCampoSenha(usuario.senha)   
        
        })
        loginPage.clicarNoBotaoEntrar()
        portalPage.validarUsuarioLogado("usuario")
        portalPage.clicarBotaoSair()
                       
    });
      
})
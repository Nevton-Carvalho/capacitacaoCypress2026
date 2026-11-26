class PortalPage {
    elementos = {
        usuarioLogado: '[data-cy="current-user"]',
        botaoSair: '[data-cy="logout-button"]'
    }

    clicarBotaoSair(){
        cy.get(this.elementos.botaoSair).click()
    }

    validarUsuarioLogado(usuario){
        cy.get(this.elementos.usuarioLogado).should('have.text', "QA Demonstração")
    }
} export default PortalPage
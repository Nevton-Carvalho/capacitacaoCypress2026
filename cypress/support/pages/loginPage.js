class LoginPage {
    elementos = {
        campoEmail: '#login-email',
        campoSenha: '[data-cy="login-password"]',
        botaoEntrar: 'button[data-cy="login-submit"]'        
    }
    preencherCampoEmail(email){
        cy.get(this.elementos.campoEmail).type(email)

    }
    preencherCampoSenha(senha){
        cy.get(this.elementos.campoSenha).type(senha)        
    }
    clicarNoBotaoEntrar(){
        cy.get(this.elementos.botaoEntrar).click()
    }


    validarEmailObrigatorio(){
        cy.get('span[class="err"]').should('have.text',"Informe o e-mail.")
    }

    validarMenssagemCampoObrigatorio(msg){
        cy.get('span[class="err"]').should('have.text', "Informe a senha.")

    }
    
} export default LoginPage
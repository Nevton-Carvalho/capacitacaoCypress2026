class BuscaDeLivroPage {
    elementos = {
        menuLivros: '[data-cy="nav-books"]',
        tituloLivros: '#view-books h2',
        tabelaLivros: '#view-books table',
        linhasLivros: '#view-books table tbody tr',
        buscarLivro: '[data-cy="book-search"]',
        filtrarDisponibilidade: '[data-cy="book-filter"]'
    }

    clicarMenuLivros(){
        cy.get(this.elementos.menuLivros).click()
    }

    validarMenuLivros(){
        cy.get(this.elementos.tituloLivros)
            .should('be.visible')
            .and('have.text', 'Catálogo de livros')
    }

    validarTabelaLivros(){
        cy.get(this.elementos.tabelaLivros).should('be.visible')
    }

    validarCabecalhosTabelaLivros(){
        cy.get(this.elementos.tabelaLivros)
            .find('thead th')
            .should('have.length', 4)
            .then(($cabecalhos) => {
                const textos = [...$cabecalhos].map(cabecalho => cabecalho.textContent.trim())

                expect(textos).to.deep.equal(['Livro', 'Categoria', 'Disponibilidade', 'Ações'])
            })
    }

    validarDadosLinhasLivros(){
        cy.get(this.elementos.linhasLivros)
            .should('have.length.greaterThan', 0)
            .each(($linha) => {
                cy.wrap($linha).find('td').should('have.length', 4)
                cy.wrap($linha).find('td').eq(0).should('not.be.empty')
                cy.wrap($linha).find('td').eq(1).should('not.be.empty')
                cy.wrap($linha).find('td').eq(2).should('not.be.empty')
                cy.wrap($linha).find('td').eq(3).find('button').should('have.length', 2)
            })
    }

    informarTituloLivro(titulo){
        cy.get(this.elementos.buscarLivro).clear().type(titulo)
    }

    selecionarDisponibilidade(disponibilidade){
        cy.get(this.elementos.filtrarDisponibilidade).select(disponibilidade)
    }

    filtrarLivros(titulo, disponibilidade){
        this.informarTituloLivro(titulo)
        this.selecionarDisponibilidade(disponibilidade)
    }

    validarResultadoLivroDisponivel(titulo){
        cy.get(this.elementos.linhasLivros)
            .should('have.length', 1)
            .and('contain.text', titulo)
            .and('contain.text', 'disponível')
    }
}

export default BuscaDeLivroPage

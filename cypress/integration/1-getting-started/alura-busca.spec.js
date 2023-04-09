describe('alura busca cursos', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        
    });


    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })
    it('buscar curso de java', () =>{
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        //identificação por seleção
        //cy.get(':nth-child(5) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
        //.should('have.text', 'Formação Java e Orientação a Objetos');
        //identificação por ID
        cy.get('h4.busca-resultado-nome').should('contain.text', 'Formação Aprenda a programar em Java com Orientação a Objetos');
        //comentario da primeira aula
    })
})
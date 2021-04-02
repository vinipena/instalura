/// <reference types='cypress'/>

describe('/pages/app/login/', () => {
  //  it === test a ser feito
  it('Preencha os campos e vá para a pagina /app/profile', () => {
    cy.visit('/app/login/');

    // document.querySelector('input[name="usuario"]')
    // preencher o input de usuario
    cy.get('#formCadastro input[name="usuario"]').type('usuario');

    // preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senha');

    // clicar no botao submit
    cy.get('#formCadastro button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile"
    cy.url().should('include', '/app/profile');
  });
});

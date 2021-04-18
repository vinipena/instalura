/// <reference types='cypress'/>

describe('/pages/app/login/', () => {
  //  it === test a ser feito
  it('Preencha os campos e vá para a pagina /app/profile', () => {
    cy.intercept('https://instalura-api.vercel.app/api/login')
      .as('userLogin');

    cy.visit('/app/login/');

    // document.querySelector('input[name="usuario"]')
    // preencher o input de usuario
    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');

    // preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar no botao submit
    cy.get('#formCadastro button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile"
    cy.url().should('include', '/app/profile');

    // Temos o token?
    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;

        cy.getCookie('APP_TOKEN')
          .should('exist')
          // token do cookie é igual ao do server?
          .should('have.property', 'value', token);
      });
  });
});

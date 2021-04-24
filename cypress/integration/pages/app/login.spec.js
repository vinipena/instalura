/* eslint-disable no-unused-vars */
/// <reference types='cypress'/>

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.PageObject';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    // Pré teste
    it('go to the profile page', () => {
      cy.intercept('https://instalura-api.vercel.app/api/login')
        .as('userLogin');
      // Cenario
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillTheFormsFields({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForms();
      // Asserções
      cy.url().should('include', '/app/profile');

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
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://localhost:3000/");
  cy.pause();
  cy.url().should("include", "/");
  cy.get("form").should("be.visible");
  cy.get('input[name="username"]').type(username).wait(2000);
  cy.get('input[name="password"]').type(password).wait(2000);
  cy.get("[data-cy=loginbtn]").click();
  cy.url().should("contain", "/startpage");
});
  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-file-upload";

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

describe("Log in", () => {
  it("Fill and log in", () => {
    cy.fixture("loginfixture").then(({ username, password }) => {
      cy.login(username, password);
    });
  });
});

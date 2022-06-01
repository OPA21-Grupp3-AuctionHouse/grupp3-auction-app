describe("Log in", () => {
  it("Fill and log in", () => {
    cy.fixture("loginfixture").then(({ username, password }) => {
      cy.login(username, password);
    });
  });
});

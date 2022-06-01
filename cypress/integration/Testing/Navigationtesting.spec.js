describe("Navigation", () => {
  beforeEach(() => {
    cy.login("Emil", "123456");
  });

  it("Navigation", () => {
    cy.wait(2000)
      .url()
      .should("include", "/startpage")
      .get("[data-cy=bazaar]")
      .click()
      .wait(2000)
      .get("[data-cy=auction]")
      .click()
      .wait(2000)
      .get("[data-cy=submitedauction]")
      .click()
      .wait(2000)
      .get("[data-cy=wonauction]")
      .click()
      .wait(2000)
      .get("[data-cy=history]")
      .click()
      .wait(2000)
      .get("[data-cy=createauction]")
      .click()
      .wait(2000)
      .get("[data-cy=profile]")
      .click()
      .wait(2000)
      .get("[data-cy=logout]")
      .click();
  });
});

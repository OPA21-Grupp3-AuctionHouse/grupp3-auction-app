describe("Categorization", () => {
  it("Checks that the cards are correctly filtered by category", () => {
    cy.login("Emil", "123456");

    cy.visit("http://localhost:3000/startpage/bazaar");
    cy.url().should("include", "/bazaar");
    cy.pause();

    cy.get("button[value='Hockey Cards']").click();
  });
});

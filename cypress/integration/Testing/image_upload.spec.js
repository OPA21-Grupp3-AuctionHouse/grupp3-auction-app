describe("Upload image", () => {
  beforeEach(() => {
    cy.login("Emil", "123456");
  });

  it("successfully uploads a file", () => {
    cy.visit("http://localhost:3000/startpage/newauction");

    //upload file to the input field
    cy.get("input[type=file]").attachFile("hockeycardNYI.jpg");

    //Assert the file
    cy.get("img[id='uploaded-img']", { timeout: 4500 })
      .should("have.attr", "src")
      .should("not.include", "no-preview-available");
  });
});

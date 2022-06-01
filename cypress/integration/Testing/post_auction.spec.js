describe("Post Auction", () => {
  /*  before(() => {
    cy.login("Emil", "123456");
  }); */

  it("successfully posts an auction", () => {
    //login user
    cy.login("Emil", "123456");

    cy.visit("http://localhost:3000/startpage/newauction");
    cy.url().should("include", "/newauction");
    cy.pause();

    //fill in input fields
    cy.get("#name").type("test");
    cy.get("#category").select("Hockey Cards");
    cy.get("#description").type("test description");
    cy.get("#price").type("120");
    cy.get("#buyout").type("200");
    cy.get("#endTime").select("One day");
    cy.pause();

    //upload file to the input field
    cy.get("input[type=file]").attachFile("hockeycardNYI.jpg");

    //Assert the img src has changed and thus the file is correctly uploaded
    cy.get("img[id='uploaded-img']", { timeout: 4500 })
      .should("have.attr", "src")
      .should("not.include", "no-preview-available");

    cy.pause();

    // click on submit button
    cy.get("button[id='post-auction']").click();

    //assert submission
    cy.get("#name").should("have.value", ""); // Assert that name input field is empty
  });

  // all code behöver vara i samma it block för att annars så körs inte submit. Den ger 401 unauthorized error från bild upload enpointen
  // vilket måste innebära att på något sätt tappas kontakten med den inloggade användaren när jag har separerade it block för varje "logik"a

  /*   it("successfully uploads a file", () => {
    cy.pause();

    //upload file to the input field
    cy.get("input[type=file]").attachFile("hockeycardNYI.jpg");

    //Assert the file
    cy.get("img[id='uploaded-img']", { timeout: 4500 })
      .should("have.attr", "src")
      .should("not.include", "no-preview-available");
  }); */
  /* 
  it("posts an auction", () => {
    cy.pause();

    // click on submit button
    cy.get("button[id='post-auction']").click();

    //assert submission
    cy.get("#name").should('have.value', ''); // Assert that name input field is empty

  }) */
});

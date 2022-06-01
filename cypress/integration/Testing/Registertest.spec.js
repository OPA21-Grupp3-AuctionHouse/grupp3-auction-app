/* describe("Website", () => {
  it("Go to website", () => {
    cy.visit("http://localhost:3000/register");
  });
}); */

describe("Register", () => {
  it("Go to website", () => {
    cy.visit("http://localhost:3000/");
    cy.pause();
  });

  it("Create account", () => {
    cy.fixture("registerfixture").then(
      ({
        firstname,
        lastname,
        username,
        email,
        password,
        streetadress,
        city,
        zipcode,
      }) => {
        cy.get("[data-cy=regbtn]")
          .click()
          .wait(2000)
          .get("form")
          .should("be.visible")
          .get('input[name="firstName"]')
          .type(firstname)
          .get('input[name="lastName"]')
          .type(lastname)
          .get('input[name="username"]')
          .type(username)
          .get('input[name="email"]')
          .type(email)
          .get('input[name="password"]')
          .type(password)
          .get('input[name="streetAddress"]')
          .type(streetadress)
          .get('input[name="city"]')
          .type(city)
          .get('input[name="postCode"]')
          .type(zipcode)
          .wait(2000)
          .get("button[data-cy='regbtn']")
          .click();
      }
    );
  });
});

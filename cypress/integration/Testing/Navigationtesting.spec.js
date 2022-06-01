describe("Navigation", () => {
  before(() => {
    cy.login("Emil", "123456");
  });

    it("Navigate to Home Page and Profile", () =>{
        cy
        .wait(2000)
        .url().should("include", "/startpage")
        .get("[data-cy=bazaar]").click()
        .wait(2000)
        .get("[data-cy=profile]").click()
        .wait(2000)
    })

    it("Navigate to My Auctions", () =>{
        cy
        .get("[data-cy=auction]").click()
        .wait(2000)
    })

    it("Navigate to Submited auctions", () =>{
        cy
        .get("[data-cy=submitedauction]").click()
        .wait(2000)
    })

    it("Navigate to won auctions", () =>{
        cy
        .get("[data-cy=wonauction]").click()
        .wait(2000)
    })

    it("Navigate to order hostory", () =>{
        cy
        .get("[data-cy=history]").click()
        .wait(2000)
    })
    
    it("Navigate to create auction", () =>{
        cy
        .get("[data-cy=createauction]").click()
        .wait(2000)
    })

    it("Click log out", () =>{
        cy
        .get("[data-cy=logout]").click()
    })

});

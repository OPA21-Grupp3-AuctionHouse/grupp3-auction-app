describe("Website", () =>{
    it("Go to website", () =>{
        cy.visit("http://localhost:3000/")
    })
})
describe("Log in", () => {
    it('Fill and log in', () => {
        cy.fixture('loginfixture').then(({ username, password }) => {
          cy
          .pause()
          .url().should('include', '/')
          .get('form').should('be.visible')
          .get('input[name="username"]').type(username)
          .get('input[name="password"]').type(password)
          .get('[data-cy=loginbtn]').click()
        })
      })
    })
describe("Navigation", () => {
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

})
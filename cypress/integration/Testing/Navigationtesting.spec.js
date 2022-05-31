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
    it("Navigation", () =>{
        cy
        .wait(2000)
        .url().should("include", "/startpage")
        .get("[data-cy=bazaar]").click()
        .wait(2000)
        .get("[data-cy=auction]").click()
        .wait(2000)
        .get("[data-cy=submitedauction]").click()
        .wait(2000)
        .get("[data-cy=wonauction]").click()
        .wait(2000)
        .get("[data-cy=history]").click()
        .wait(2000)
        .get("[data-cy=createauction]").click()
        .wait(2000)
        .get("[data-cy=profile]").click()
        .wait(2000)
        .get("[data-cy=logout]").click()
    })

})
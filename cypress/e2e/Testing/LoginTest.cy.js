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
          .get('input[name="username"]').type(username).wait(2000)
          .get('input[name="password"]').type(password).wait(2000)
          .get('[data-cy=loginbtn]').click()
        })
      })
    })
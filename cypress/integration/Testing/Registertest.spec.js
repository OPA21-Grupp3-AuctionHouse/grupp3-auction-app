describe('Website', () =>{
    it('Go to website', () =>{
        cy.visit('http://localhost:3000/')
    })
})

describe('Register',()=>{
    it("Create account", () => {
        cy.fixture("example").then(({firstname, lastname, username, email, password}) =>{
            cy
            .get('[data-cy=regbtn]').click()
            .wait(2000)
            .get('form').should('be.visible')
            .get('input[name="firstName"]').type(firstname)
            .get('input[name="lastName"]').type(lastname)
            .get('input[name="username"]').type(username)
            .get('input[name="email"]').type(email)
            .get('input[name="password"]').type(password)
        })
    })
})
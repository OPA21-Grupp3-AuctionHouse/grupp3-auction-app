describe('Website', () =>{
    it('Go to website', () =>{
        cy.visit('http://localhost:3000/')
    })
})

describe('Log in', () => {
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
        it("Go to profile", () =>{
            cy
            .wait(3000)
            .url().should("include","/startpage")
            .get("[data-cy=profile").click()
        })
    })

    describe('Profile',()=>{
        it("change profile information", () => {
            cy.fixture("profilefixture").then(({firstname, lastname, city, streetadress, zipcode}) =>{
                cy
                .wait(2000)
                .get('form').should('be.visible')
                .get('input[name="firstName"]').clear()
                .get('input[name="firstName"]').type(firstname)
                .get('input[name="lastName"]').clear()
                .get('input[name="lastName"]').type(lastname)
                .get('input[name="postCode"]').clear()
                .get('input[name="postCode"]').type(zipcode)
                .get('input[name="city"]').clear()
                .get('input[name="city"]').type(city)
                .get('input[name="streetAddress"]').clear()
                .get('input[name="streetAddress"]').type(streetadress)
                .wait(2000)
                .get('[data-cy=chprofile]').click()
            })
        })
        it('Change password', ()=>{
            cy.fixture('profilefixture').then(({password, newpassword, repeatpassword}) =>{
                cy
                .get('input[name="password"]').type(password)
                .get('input[name="newPassword"]').type(newpassword)
                .get('input[name="repeatPassword"]').type(repeatpassword)
                .wait(2000)
                .get('[data-cy=chpass]').click()

            })
        })
    })

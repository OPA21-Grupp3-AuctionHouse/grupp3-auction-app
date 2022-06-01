//need fixing ask 

describe('Website', () =>{
    it('Go to website', () =>{
        cy.visit('http://localhost:3000/')
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

describe('MakeBid', ()=> {
    it('Click on auction', ()=> {
        cy.url().should('include', '/startpage')
        .wait(2000)
        .get('[data-cy=auction]').click()
        .wait(2000)
        .get("[data-cy=bazaar]").click()
        .wait(2000)
        .get('.product-container').click()
    })

    it('Make a bid of 150',()=>{
        cy.fixture('bidfixture').then(({ bid }) =>{
            cy
            .wait(2000)
            .get('input[name="bid"]').clear()
            .get('input[name="bid"]').type(bid)
            .wait(2000)
            .get('[data-cy=makebid]').dblclick()

        }) 
    })
    it('Check bid',()=>{
        cy
        .get('[data-cy=closewin]').click()
        .wait(2000)
        .get("[data-cy=auction]").click()
        .wait(1000)
        .get('.order-container').click('top')
    })
})



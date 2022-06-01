//need fixing/asking


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

    describe('Buy out', ()=> {
        it('Click on auction', ()=> {
            cy.url().should('include', '/startpage')
            .wait(2000)
            .get("[data-cy=bazaar]").click()
            .wait(2000)
            .get('.product-container').click()
        })
    
        it('Click buyout',()=>{
            cy.fixture('bidfixture').then(({ bid }) =>{
                cy
                .wait(2000)
                .get('[data-cy=buybtn]').click()
    
            }) 
        })
        it('Go to my auction',()=>{
            cy
            .wait(2000)
            .get('[data-cy=auction]').click()
        })
        it('Go to won auction',()=>{
            cy
            .wait(2000)
            .get('[data-cy=wonauction]').click()
        })
        it('Click on item',()=>{
            cy
            .wait(2000)
            .get('.order-container').click('top')
        })
    })
    
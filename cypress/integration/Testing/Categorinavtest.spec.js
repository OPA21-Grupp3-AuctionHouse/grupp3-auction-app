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
describe("Navigate", () => {
    it("Goes to the auction page", () => {
        cy.pause()
        .get("[data-cy=bazaar]").click()
    })


    let categoryFilters = ['Baseball Cards', 
                        'Football Cards', 
                        'Hockey Cards', 
                        'Pokémon', 'Magic: The Gathering', 
                        'Sorcerer', 'Final Fantasy', 
                        'Star Realms/Hero Realms', 
                        'Skyforge',
                        'Yu-Gi-Oh!', 
                        'Android: Netrunner', 
                        'MetaZoo']

    it("Navigates every category filter an checks if all items is of that category", () => {
        categoryFilters.forEach(category => {
            cy.get(`[value="${category}"]`).click()
            .get(":nth-child(1) > .product-category").should("have.text", category)
            .wait(100)
        });
    })
})
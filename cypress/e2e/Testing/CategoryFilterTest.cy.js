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

    
    let categoryFilter = ['Baseball Cards', 
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
        categoryFilter.forEach(category => {
            cy.get(`[value="${category}"]`).click()
            .get(":nth-child(1) > .product-category").should("have.text", category)
            .wait(100)
        });
        /*
        cy.get("[value='Baseball Cards']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Baseball Cards")
        .wait(100)
        .get("[value='Football Cards']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Football Cards")
        .wait(100)
        .get("[value='Hockey Cards']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Hockey Cards")
        .wait(100)
        .get("[value='Pokémon']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Pokémon")
        .wait(100)
        .get("[value='Magic: The Gathering']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Magic: The Gathering")
        .wait(100)
        .get("[value='Sorcerer']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Sorcerer")
        .wait(100)
        .get("[value='Final Fantasy']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Final Fantasy")
        .wait(100)
        .get("[value='Star Realms/Hero Realms']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Star Realms/Hero Realms")
        .wait(100)
        .get("[value='Skyforge']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Skyforge")
        .wait(100)
        .get("[value='Yu-Gi-Oh!']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Yu-Gi-Oh!")
        .wait(100)
        .get("[value='Android: Netrunner']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "Android: Netrunner")
        .wait(100)
        .get("[value='MetaZoo']").click()
        .get(":nth-child(1) > .product-category").should("have.text", "MetaZoo")
        */
    })
})

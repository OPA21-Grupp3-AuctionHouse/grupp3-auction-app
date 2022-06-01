describe('Website', () =>{
    it('Go to website', () =>{
        cy.visit('http://146.190.18.26:3000/')
    })
})

describe('scrolling', () => {
    it('Goes down and up', () => {
        cy
        .wait(2000)
        .scrollTo('bottom')
        .wait(2000)
        .scrollTo('top')
    })
})
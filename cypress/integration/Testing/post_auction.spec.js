describe("Post Auction", () => {
  it("succesfully posts an auction and image", () => {
    cy.visit("http://localhost:3000/startpage/newauction");

    //upload file to the input field
    cy.get("input[type=file]").attachFile("hockeycardNYI.jpg");

    // click on upload button
    cy.get("#upload_file").click();

    //Assert the file name
    cy.get("img").should("be.visible");
  });
});

/* cy.get('#name').type("test")
cy.get('#category').type("Hockey Card")
cy.get('#description').type("test description")
cy.get('#price').type("120")
cy.get('#buyout').type("200")
cy.get('#endTime').type("one day") */

/* createProduct(auction) {
  return axios.post(`${API_URL_TEST}/createauction`, auction, {
    withCredentials: true,
  });
}

it("successfully posts auction", () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8080/api/createauction',
    form: true,
    body: cy.fixture('post_auction.json')
  })
  .then((response) =>{
    expect(response.status).to.eq.(200)
    expect(response).to.have.property()
  })
}); */

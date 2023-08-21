it("load list board", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/api/boards",
    },
    {
      fixture: "mockData.json",

      // body: [{
      //     name: 'new Board',
      //     starred: true,
      //     id: 3
      // }]
    }
  ).as("boardList");

  cy.visit("/");
});

it("error warning", () => {
  cy.intercept({
    method: "POST",
    url: "/api/boards",
  },{
    statusCode: 403
  }).as("boardCreate");

  cy.visit("/");

  cy.get('[data-cy="create-board"]').click();
  cy.get('[data-cy="new-board-input"]').type("Test123{enter}");

  cy.get('[data-cy="notification-message"]').should('contain.text','There was an error creating board')
});


it.only('slow loading', ()=>{


    cy.intercept({
        method: "GET",
        url: "/api/boards",
        times:1
      },(req)=>{
            req.reply((res)=>{
                res.delay = 10000
            })
      }).as('boards')

      cy.visit('/')

      cy.contains('Reload').click()

      cy.get('[data-cy=board-item]').should('be.visible')
})
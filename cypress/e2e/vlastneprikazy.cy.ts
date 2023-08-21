


beforeEach(() => {
  cy.request("POST", "/api/reset");
  cy.request("POST", "/api/boards", { name: "nakup" })
    .its("body.id")
    .as("boardID");
});

it('commands', function(){

    cy.visit(`/board/${this.boardID}`)
    cy.dataCy('add-list-input').type('Potraviny{enter}')

    cy.dataCy('new-card').click()
    cy.dataCy('new-card-input').type('mlieko{enter}')
});
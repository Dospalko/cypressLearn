it("Vytvorenie interakcie", () => {
  cy.visit("/");
  cy.get('[data-cy="create-board"] > h1').click();
  cy.get('[data-cy="new-board-input"]').type('New board test')
  cy.get('[data-cy="new-board-create"]').click();
  cy.get('[data-cy="add-list-input"]').type('hh')
  cy.get('.grid > div > .py-1').click();
  cy.get('[data-cy="new-card"]').click();
  cy.get('[data-cy="new-card-input"]').type('test{enter}')
});

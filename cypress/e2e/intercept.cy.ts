///<reference types="cypress"/>

it('new card', () => {

    cy.intercept('POST','/api/cards').as('newCard')

    cy.visit('/board/1')
    cy.get('[data-cy="new-card"]').click()
    cy.get('[data-cy="new-card-input"]').type('chlieb{enter}')

    cy.wait('@newCard')
    .its('response.statusCode')
    .should('eq',201)
});


it('odstranenie blocku', () => {

    cy.intercept('DELETE','api/cards/*').as('vymazanie')
    cy.visit('/board/1')

    cy.get('[data-cy="card-list"]').last().click()
    cy.get('[data-cy="card-detail-delete"]').click()

    cy.wait('@vymazanie')
});

it('no li in board', () => {

    cy.intercept('GET',/lists/).as('list')

    cy.visit('/board/1')

    cy.wait('@list')
    cy.get('[data-cy="list"]').should('not.exist')
});
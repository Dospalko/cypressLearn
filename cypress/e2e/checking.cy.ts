it('overovanie', ()=>{
    cy.visit('/board/1')
    cy.get('[data-cy="card"]').should("be.visible")
    cy.get('[data-cy="card"]').should("have.length",1)
    cy.get('[data-cy="card-checkbox"]').eq(0).check()
    cy.get('[data-cy="card-checkbox"]').should('be.checked')
    cy.get('[data-cy="due-date"]').should('have.class', 'completed')
    cy.get('[data-cy="card-checkbox"]').eq(0).uncheck()
    cy.get('[data-cy="card-checkbox"]').should('not.be.checked')
    
})
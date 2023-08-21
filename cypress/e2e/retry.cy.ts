it('retry', {defaultCommandTimeout : 1000}, ()=>{
    cy.visit('/board/1');
    cy.get('[data-cy="card"]').eq(1).should('contain.text', 'juice');
})
beforeEach(()=>{
    cy.visit("/");

    cy.get('#board-1').invoke("text").as("boardName");
})


it("premenne", function(){

    cy.get('#board-1').click();

    cy.get('[data-cy="board-title"]').should('have.value', this.boardName);
});

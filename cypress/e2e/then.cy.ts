it('retry', {defaultCommandTimeout : 1000}, ()=>{
    cy.visit('/board/1');
    cy.get('[data-cy="card-text"]')
        .eq(1)
        .then((card)=>{
            expect(card).to.have.text('juice')
        })

        cy.get('[data-cy="card-text"]')
            .then((cards)=>{
                expect(cards[0]).to.have.text('dog')
                expect(cards[1]).to.have.text('juice')
            })
});
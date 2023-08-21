beforeEach(()=>{
    cy.request('POST', '/api/reset')
});


it('requesty', () => {
  
    cy.request('POST','/api/boards',{name: 'newboard'})
    .then( board =>{
        expect(board.status).to.eq(201)
    })
    
    cy.request({
        method: 'GET',
        url: '/api/boards',
        headers:{
            accept: 'application/json'
        }
    }).its('status')
    .should('eq',200)
});
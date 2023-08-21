it('plugin', () => {
    cy.api('POST','/api/boards',{
        name: "Hello World"
    })
   
});
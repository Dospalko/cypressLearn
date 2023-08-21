beforeEach(() => {
  cy.visit("/board/1?card=1");
});
it('', () => {
    cy.contains('Download')
    .click()

    cy.readFile('cypress/downloads/1_skillmea_logo.svg')
});
  

// it("testupload", () => {
//   cy.get('[data-cy="upload-image"] > .grid').selectFile(
//     "cypress/fixtures/skillmea_logo.svg", {action : 'drag-drop'}
//   );
// });

// it("", () => {
//   cy.get("[type=file]")
//     .invoke("show")
//     .selectFile("cypress/fixtures/skillmea_logo.svg");
// });

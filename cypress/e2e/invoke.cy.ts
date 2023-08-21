import { resetDb } from "cypress/tasks/resetDb";

after(()=>{
    resetDb
})

beforeEach(() => {
  cy.visit("/board/1");
});

it('s', () => {
    
});
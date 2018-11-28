describe('Start page', () => {
  before(() => {
    cy.visit('http://localhost:4200');
  });

  it('loads', () => {});

  it('has 3 helpful links', () => {
    cy.get('ul li').should('have.length', 3);
  });

  it('has an image', () => {
    cy.get('img');
  });
});

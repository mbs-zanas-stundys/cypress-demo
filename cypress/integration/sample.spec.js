describe('Start page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('loads', () => {});

  it('has 3 navigation links', () => {
    cy.get('nav a').should('have.length', 3);
  });

  it('each navigation link should open a page', () => {
    cy.get('nav a').click({ multiple: true });
  });

  it('have a 404 page', () => {
    cy.visit('http://localhost:4200/random-page-that-does-not-exist');
    cy.contains('404');
  });

  it('redirect to /home', () => {
    cy.visit('http://localhost:4200/');
    cy.url().should('contain', '/home');
  });
});

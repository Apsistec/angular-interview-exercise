describe('Home', () => {
  beforeEach(() => {
    cy.navigateToHomePage();
  });

  it('Visits the initial project page', () => {
    cy.get('.header-text')
      .should('exist')
      .contains('Alaska Air - Angular Interview Exercise');
  });

  it('locate the api results', () => {
    cy.get('p').should('exist');
  });
});

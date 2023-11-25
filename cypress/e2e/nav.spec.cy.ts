describe('template spec', () => {
  it('charges the home page and sees a list of 3 articles', () => {
    cy.visit('http://localhost:4200/');

    cy.get('app-product-list').should('exist');

    cy.get('app-product-list')
      .find('div')
      .should('have.length', 3);
  });
});

describe('template spec', () => {
  it('charges the home page and sees a list of 3 articles', () => {
    cy.visit('http://localhost:4200/');

    cy.get('a.button.fancy-button').click();

    cy.url().should('include','/cart');

//    cy.go('back');

    cy.get('a[href*="/shipping"]').click();

    cy.url().should('include','/shipping');

    cy.get('app-shipping')
      .find('div.shipping-item')
      .should('have.length', 3);
  });
});

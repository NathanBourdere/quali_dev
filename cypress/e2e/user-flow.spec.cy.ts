describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });
  it('charges the home page, views product details, and triggers an alert', () => {

    cy.get('a[title*="Phone XL details"]').click();
    cy.url().should('include', '/products/1');
    cy.get('button[type*="button"]').click();

    cy.on('window:alert', (alertText) => {
    });
    cy.wait(1000);
  });

  it('charges the home page and sees a list of 3 articles', () => {

    cy.get('app-product-list').should('exist');
    cy.get('app-product-list')
      .find('div')
      .should('have.length', 3);
  });
});

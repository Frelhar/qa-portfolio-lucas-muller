describe('Swag Labs Login and Basic Flows', () => {
  beforeEach(() => {
    // Visit the base URL defined in cypress.config.js
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      const { valid } = users;
      cy.get('[data-test="username"]').type(valid.username);
      cy.get('[data-test="password"]').type(valid.password);
      cy.get('[data-test="login-button"]').click();
      // Verify we are on inventory page
      cy.url().should('include', '/inventory');
      // Check that an inventory item is visible
      cy.get('.inventory_item').should('exist');
    });
  });

  it('should show an error with invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const { invalid } = users;
      cy.get('[data-test="username"]').type(invalid.username);
      cy.get('[data-test="password"]').type(invalid.password);
      cy.get('[data-test="login-button"]').click();
      // Check error message appears
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
  });

  it('should logout successfully', () => {
    // First login with valid credentials
    cy.fixture('users').then((users) => {
      const { valid } = users;
      cy.get('[data-test="username"]').type(valid.username);
      cy.get('[data-test="password"]').type(valid.password);
      cy.get('[data-test="login-button"]').click();
    });
    // Open the side menu and logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    // Verify we are back at the login page
    cy.url().should('not.include', '/inventory');
    cy.get('[data-test="login-button"]').should('exist');
  });

  it('should reset app state', () => {
    // Login with valid credentials
    cy.fixture('users').then((users) => {
      const { valid } = users;
      cy.get('[data-test="username"]').type(valid.username);
      cy.get('[data-test="password"]').type(valid.password);
      cy.get('[data-test="login-button"]').click();
    });
    // Add an item to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    // Use the menu to reset the app state
    cy.get('#react-burger-menu-btn').click();
    cy.get('#reset_sidebar_link').click();
    // Badge should disappear
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});

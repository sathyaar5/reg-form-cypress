describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders the login form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('allows the user to type an email', () => {
      cy.get('input[type="email"]').type('test@example.com').should('have.value', 'test@example.com');
    });
  
    it('allows the user to type a password', () => {
      cy.get('input[type="password"]').type('password123').should('have.value', 'password123');
    });

    it('allows the user to type a password and email', () => {
        cy.get('input[type="email"]').type('test@example.com').should('have.value', 'test@example.com');
        cy.get('input[type="password"]').type('password123').should('have.value', 'password123');
      });
  
    it('submits the form with all fields', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
    });

    it('shows an error message when submitting with empty fields', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Please fill out this field', { timeout: 5000 }).should('exist');
    });
    
    it('shows an error message when submitting with an empty username field', () => {
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.get('form').contains('Please fill out this field').should('be.visible');
    });
  

    it('shows an error message when submitting with an empty password field', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('button[type="submit"]').click();
        cy.get('form').contains('Please fill out this field').should('be.visible');
    });
    
});
  


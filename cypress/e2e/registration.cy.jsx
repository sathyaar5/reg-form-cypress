describe('Registration Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully submits the form', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');                                                                                 
    cy.get('button[type="submit"]').click();
  });

  it('displays validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Username is required').should('exist');
    cy.contains('Email is required').should('exist');
    cy.contains('Password is required').should('exist');
  });

  it('displays validation errors for invalid input', () => {
  
    cy.get('button[type="submit"]').click();
    cy.contains('Username is required').should('exist');
  
    cy.get('input[name="email"]').type('invalidemail');
    cy.get('button[type="submit"]').click();
  
    cy.get('input[name="password"]').clear().type('pass');
    cy.get('button[type="submit"]').click();
    // cy.contains('Password must be at least 6 characters').should('exist');
  });
 
  it('displays validation errors for password length', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('short'); 
    cy.get('button[type="submit"]').click();

    cy.contains('Password must be at least 6 characters').should('exist');
  });
});
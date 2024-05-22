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
    cy.visit('/');
    cy.get('button[type="submit"]').click();
    // Wait for validation messages container to appear
    cy.get('.validation-errors').should('exist');
  
    cy.get('input[name="username"]').type(''); // Empty username
    cy.get('button[type="submit"]').click();
    // Assert that the validation error for username appears within the validation messages container
    cy.get('.validation-errors').contains('Username is required').should('exist');
  
    cy.get('input[name="email"]').type('invalidemail');
    cy.get('button[type="submit"]').click();
    cy.get('.validation-errors').contains('Email must be a valid email address').should('exist');
  
    cy.get('input[name="password"]').clear().type('pass');
    cy.get('button[type="submit"]').click();
    cy.get('.validation-errors').contains('Password must be at least 6 characters').should('exist');
  });

  it('displays validation errors for password length', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('short'); // Type a short password
    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="password-error"]').should('exist').and('contain', 'Password must be at least 6 characters');
  });
});



describe('My First Test', () => {
    it('Opens first page', () => {
      cy.visit('http://localhost:3000')
    })
  })



  describe('Login button test', () => {
    it('Clicks the link "button"', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('.btn').click()  
    })
  })


  describe('Create client button test', () => {
    it('Clicks the link "button"', () => {
      cy.visit('http://localhost:3000/dashboard')
      cy.get('.btn').click()  
    })
  })

  describe('Create client test', () => {
    it('Clicks the link "button"', () => {
      cy.visit('http://localhost:3000/addClient')
      cy.get('.btn').click()  
    })
  })


  describe('Testing input in client form', () => {
    it('Gets, types and asserts', () => {
      cy.visit('http://localhost:3000/addClient')
  
      cy.get('.btn').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/addClient')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.invalid-feedback')
        .type('ivan')
        
        .should('have.value', 'ivan')
    })
  })
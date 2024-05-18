describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('#Email').type('jannahannur528@gmail.com')
    cy.get('#Password').type('abc123')
    cy.get('#RememberMe').click
    cy.get('form > .buttons > .button-1').click()
    cy.url().should('include','tricentis')
    
})
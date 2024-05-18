describe('template spec', () => {
  it.('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('#small-searchterms').type('book')
    cy.get('form > .button-1').click()
  })
})
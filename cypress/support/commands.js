// Function to login
// Params: email and passwd
Cypress.Commands.add('login', (email, passwd) =>{
    cy.get('#email').type(email)
    cy.get('#passwd').type(passwd)
    cy.get('#SubmitLogin').click()

})

// Function to click on proceed to checkout button
Cypress.Commands.add('proceed_to_checkout', () =>{
    cy.get('.cart_navigation > .button > span').click({force: true})
})
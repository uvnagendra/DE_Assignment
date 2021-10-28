/// <reference types="Cypress" />
describe("Login and add a product to cart", function()
{   

    it("Login to automationpractice.com", function()
    {   
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.login').click()
        cy.login(Cypress.env('usr_mail_id'), Cypress.env('passwd'))
        // Verify logged in user name
        cy.get("a[title*='customer account']").should('contain.text', Cypress.env('usrname'))

    })

    it("Add a product to cart", function()
    {
        var product = Cypress.env('product')
        cy.get('.sf-menu > :nth-child(3) > a').click()
        // Check product is available and in stock and then add to cart
        cy.get("a[title*="+"'"+product+"'"+"]").should('exist')
        cy.get(".available-now").should('contain.text', 'In stock')
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click({force: true})
        cy.reload()
        //Check number of products in cart is 1
        cy.get("#summary_products_quantity").should('have.text', '1 Product')
        //Getting total price of product
        cy.get('#total_price').invoke('text').then(function(product_price){
            cy.log(product_price)
            cy.proceed_to_checkout()
            cy.login(Cypress.env('usr_mail_id'), Cypress.env('passwd'))
            cy.proceed_to_checkout()
            cy.get('#cgv').click()
            cy.proceed_to_checkout()
            cy.get('.bankwire').click()
            cy.proceed_to_checkout()

            // Verify order is successful and total amount to be paid is same as before
            cy.get('.cheque-indent > .dark').should('have.text', 'Your order on My Store is complete.')
            cy.get('.price > strong').should('have.text', product_price)
        })

    })



})
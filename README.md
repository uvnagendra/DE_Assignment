# DE_Assignment
## Test Script to login to automationpractice.com and add a product to cart using cypress.

**Author**: Nagendra Prasad

**Precondition**: Following applications should be installed

- Node JS
- Visual Studio Code
- Install cypress from VS code
- Install mochawesome, mochawesome-merge and mochawesome-report-generator for HTML report generation from VS code.


### This repo consists of code to automate automationpractice.com and includes below scenarios.

**Acceptance Criteria**
1. Navigate to http://automationpractice.com/index.php
2. Login with valid user 
3. Select product (any 1 or more products) and add to cart
4. And place the order and assert order placement is completed 

**Test Suite**: Login and add a product to cart

**Scenario 1**: Login to automationpractice.com:-

Here we are entering user name and password, login to automationpractice.com and checking
logged in user name is displaying on the right top corner of the home page.
  
**Scenario 2**: Add a product to cart :-

Here we are adding a product by checking product exists and in stock. 
And checking only one product is available in cart and get the total price of it for later verification. 
Then verifying order is successfuly placed and order amount is same as the total amount noted before.
  
## How to run the test??
Open a terminal in VS code

1. To open cypress and run script:

    In terminal run ``` npx cypress open ``` command to open cypress
 
    In cypress click on ``` add_prod_to_cart.js ```

2. Run script in headless mode
    In terminal run below command

    ``` npx cypress run --spec "cypress\integration\shopping_cart\add_prod_to_cart.js" ```

3. Run script in headed mode
    In terminal run below command

    ``` npx cypress run --spec "cypress\integration\shopping_cart\add_prod_to_cart.js" --headed ```




> **Note**:

> All the user related data have been driven from the ``` cypress.json file ```

> Common methods have been placed under ``` CypressAutomation\cypress\support\commands.js ```

> HTML report is available in ``` cypress/reports ```




  




# DE_Assignment
Test Script to login to automationpractice.com and add a product to cart using cypress.

**Author**: Nagendra Prasad
**Precondition**: Following applications should be installed
1.Node JS
2.Visual Studio Code
3.Install cypress from VS code
4.Install mochawesome, mochawesome-merge and mochawesome-report-generator for HTML report generation from VS code.


This branch consists of code to automate automationpractice.com and includes below scenarios.
**Test Suite**: Login and add a product to cart
**Scenario 1**:Login to automationpractice.com:-
  Here we are entering user name and password, login to automationpractice.com and checking
  logged in user name is displaying on the right top corner of the home page.
  
**Scenario 2:**: Add a product to cart :-
  Here we are adding a product by checking product exists and in stock.
  And verifying that the product is available in cart and also checking there is only one product in cart.
  
  
**How to run the test??**
Open a terminal in VS code
1.To open cypress and run script:
In terminal run below command to open cypress 
**npx cypress open**
Then click on **add_prod_to_cart.js**

2.Run script in headless mode
In terminal run below command
**npx cypress run --spec "cypress\integration\shopping_cart\add_prod_to_cart.js"**

2.Run script in headed mode
In terminal run below commandd
**npx cypress run --spec "cypress\integration\shopping_cart\add_prod_to_cart.js" --headed**


**Note**:All the user related data have been driven from the cypress.json file




  




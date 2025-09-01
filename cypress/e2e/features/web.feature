Feature: WEB Test

  Scenario: Successful Login
    Given I am on the login pages
    When I enter "teste2021@teste.com.br" and "teste123"
    And I click the login button
    Then I should see "Logged in as" on the page

  Scenario: Search for a product
    Given I am on the homepage
    When I access the products screen 
    When I search for "Frozen"
    Then I should see results related to "Frozen"

  Scenario: Add a product to the cart
    Given I have searched for a product
    When I add the first product to the cart
    Then I should see the product in the cart summary

  Scenario: Validate products in the cart on the payment screen
    Given I have added products to the cart
    When I proceed to the checkout
    Then I should see the correct products in the payment screen
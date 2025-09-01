const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the homepage", () => {
    cy.login();
});

When("I access the products screen", () => {
    cy.accessProductsPage();
});

When("I search for {string}", (product) => {
    cy.searchProduct(product);
    cy.wrap(product).as('searchedProduct');
});

Then("I should see results related to {string}", (product) => {
    cy.verifySearchResults(product);
    cy.screenshot('Search Sucess', { capture: 'runner' });
});

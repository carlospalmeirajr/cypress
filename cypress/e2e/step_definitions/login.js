const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { locators } = require('../../support/locators');

Given('I am on the login pages', () => {
    cy.visit(Cypress.env("loginUrl"));
});

When('I enter {string} and {string}', (email, password) => {
    cy.get(locators.login.email).type(email);
    cy.get(locators.login.password).type(password);
});

When('I click the login button', () => {
    cy.get(locators.login.submit).click();
});

Then('I should see {string} on the page', (message) => {
    cy.contains(message).should('be.visible');
    cy.screenshot('Login Success', { capture: 'runner' });
});

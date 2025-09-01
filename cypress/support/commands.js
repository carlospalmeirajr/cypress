const email = Cypress.env('email');
const password = Cypress.env('password');
const { locators } = require("./locators");

Cypress.Commands.add("login", () => {
    cy.visit("https://www.automationexercise.com/login");
    cy.get(locators.login.email).type(email);
    cy.get(locators.login.password).type(password);
    cy.get(locators.login.submit).click();
    cy.contains('Logged in as').should('be.visible');
});

Cypress.Commands.add("searchProduct", (product) => {
    cy.get(locators.products.searchProduct).type(product);
    cy.get(locators.products.submitSearc).click();
    cy.wrap(product).as('searchedProduct');
});

Cypress.Commands.add("getSearchedProduct", () => {
    return cy.get('@searchedProduct');
});

Cypress.Commands.add('accessProductsPage', () => {
    cy.get(locators.products.goProduts).click();
    cy.url().should('include', '/products');
});

Cypress.Commands.add("clearCart", () => {
    cy.get(locators.cart.viewCart).click();

    cy.url().should('include', '/view_cart');

    cy.get('tbody tr').then((rows) => {
        if (rows.length > 0) {
            
            cy.get(locators.cart.deleteProductsCart).each(($el) => {
                cy.wrap($el).click();
            });
        }
    });

    cy.contains('Cart is empty!').should('be.visible');
    cy.screenshot('CartCleared', { capture: 'runner' });
});

Cypress.Commands.add('verifySearchResults', (product) => {
    cy.get('.productinfo > p').scrollIntoView()
        .should('contain.text', product);
});

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Eu envio uma requisição para o endpoint Trello API", () => {
    cy.request({
        method: "GET",
        url: Cypress.env("trelloApiUrl"),
    }).as("apiResponse");
});

Then("Eu exibo o conteúdo do campo {string} da estrutura {string}", (field, parent) => {
    cy.get("@apiResponse").then((response) => {
        expect(response.status).to.eq(200);

        const parentData = response.body.data[parent];
        expect(parentData).to.exist;
        expect(parentData[field]).to.exist;
        cy.log(`Valor encontrado: ${parentData[field]}`);
        cy.screenshot('Api Success', { capture: 'runner' });
    });
});

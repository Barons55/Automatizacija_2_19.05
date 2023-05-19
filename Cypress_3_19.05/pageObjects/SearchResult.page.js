import BasePage from "./Base.page";

class SearchResultsPage extends BasePage {

    static get url() {
        return "/#/search";
    }

    static get product() {
        return cy.get(".product");
    }
    static get header() {
        return cy.get("h1");
    }
    static get closeProductButton() {
        return cy.get(".close-dialog");
    }
    static get clickOnRewievButton() {
        cy.wait(200);
        return cy.get(".mat-expansion-panel")
       // return cy.get("..mat-expansion-indicator")
    }

    static get validateRewiev() {
        return cy.get(".review-text");
    }
}

export default SearchResultsPage;
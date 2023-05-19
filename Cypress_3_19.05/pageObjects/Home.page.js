import BasePage from "./Base.page";

class HomePage extends BasePage{

    static get url() {
        return "/";
    }

    static get accountButton() {
        return cy.get('[id="navbarAccount"]');
    }
    static get loginButton() {
        return cy.get("#navbarLoginButton");
    }

    static get searchIcon() {
        return cy.get("#searchQuery");
    }

    static get searchField() {
        return cy.get(".mat-input-element");
    }

    static get productAmountField() {
        return cy.get("mat-select[aria-label='Items per page:']");
    }
    static get productAmountFieldOption() {
        return cy.get(".mat-option-text");
    }

    static get validateProductAmount() {
        return cy.get(".product");
    }
}

export default HomePage;
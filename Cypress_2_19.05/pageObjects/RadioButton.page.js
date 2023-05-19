import BasePage from "./Base.page";
class RadioButtonPage extends BasePage {

    static get url() {
        return "/radio-button";
    }

    static get clickYesButton() {
        return cy.get("#yesRadio");
    }

    static get validateClickedButton() {
        return cy.get(".text-success");
    }

    static get clickImpresiveButton() {
        return cy.get("#impressiveRadio");
    }

    static get checkNoButton () {
         return cy.get("#noRadio");
    }
}
export default RadioButtonPage;
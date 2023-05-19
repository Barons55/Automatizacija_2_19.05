import BasePage from "./Base.page";
class ButtonsPage extends BasePage {

    static get url() {
        return "/buttons";
    }

    static get clickDoubleButton() {
        return cy.get("#doubleClickBtn");
    }

    static get validateDoubleButton() {
        return cy.get("#doubleClickMessage");
    }
    static get clickRightClickButton() {
        return cy.get("#rightClickBtn");
    }

    static get validateRightClickButton() {
        return cy.get("#rightClickMessage");
    }

    static get clickDynamicButton() {
        return cy.get(".btn-primary").eq(2);
    }

    static get validateDynamicButton(){
        return cy.get("#dynamicClickMessage");
    }

}
export default ButtonsPage;
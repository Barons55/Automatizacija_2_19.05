import BasePage from "./Base.page";
class CheckBoxPage extends BasePage {

    static get url() {
        return "/checkbox";
    }

    static get plusButton() {
        return cy.get(".rct-option-expand-all");
    }

    static get fileBoxCheck() {
        return cy.get(".rct-title");
    }

    static get fileBoxValidate() {
        return cy.get(".text-success");
    }
    
}
export default CheckBoxPage;
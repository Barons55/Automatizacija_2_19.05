import BasePage from "./Base.page";

class RegistrationPage extends BasePage{

    static get url() {
        return "/";
    }

    static get emailField() {
        return cy.get("#emailControl");
    }

    static get passwordField() {
        return cy.get("#passwordControl");
    }

    static get repeatPasswordField() {
        return cy.get("#repeatPasswordControl");
    }

    static get squrityQuestionBox() {
        return cy.get("#mat-select-2");
    }

    static get squrityQuestionBoxOption() {
        return cy.get("#mat-option-3");
    }

    static get squrityQuestionBoxAnswer() {
       return cy.get("#securityAnswerControl");
    }

    static get registerButton() {
       return cy.get("#registerButton");
    }


}

export default RegistrationPage;
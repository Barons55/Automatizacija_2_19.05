import HomePage from "../../pageObjects/Home.page";
import LoginPage from "../../pageObjects/Login.page";
import RegistrationPage from "../../pageObjects/Registration.page";
import SearchResultsPage from "../../pageObjects/SearchResult.page";

describe("Juice-Shop scenarios", () => {
  context("With no login", () => {
    beforeEach(() => {
      HomePage.visit("/");
      //click on dissmis button
      HomePage.dismissButton.click();
      //click on we won it button
      HomePage.wantItButton.click(); 
    });
    it("Registration", () => {
      //click account
      HomePage.accountButton.click();
      //click login
      HomePage.loginButton.click();
      //click not yet a customer?
      LoginPage.notYetCustomerLink.click();
      //set email
      RegistrationPage.emailField.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
      //set password
      RegistrationPage.passwordField.type("password");
      //set repeat-password
      RegistrationPage.repeatPasswordField.type("password");
      //select sequrity - question
      RegistrationPage.squrityQuestionBox.click();
      RegistrationPage.squrityQuestionBoxOption.click();
      //set security -questio answer
      RegistrationPage.squrityQuestionBoxAnswer.type("test");
      //click register
      RegistrationPage.registerButton.click();
      //validate toast msg
      LoginPage.toastMessage.should(
      "have.text",
      "Registration completed successfully. You can now log in."
      );
    });
  });
  context("With login", () => {
    beforeEach(() => {
      LoginPage.visit("/");
      LoginPage.dismissButton.click();
      LoginPage.wantItButton.click();
      LoginPage.logInto("demo","demo");
    });
    it("Search for lemon", () => {
    HomePage.searchIcon.click();
    HomePage.searchField.type("lemon{enter}");
    SearchResultsPage.product.contains("Lemon Juice").click();
    SearchResultsPage.header.should("have.text","Lemon Juice (500ml)");
    });

    it ("Search for 500ml", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("500ml{enter}");
      SearchResultsPage.product.contains("Eggfruit Juice").click();
      SearchResultsPage.header.should("have.text","Eggfruit Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text","Lemon Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
      SearchResultsPage.product.contains("Strawberry Juice").click();
      SearchResultsPage.header.should("have.text","Strawberry Juice (500ml)");
      SearchResultsPage.closeProductButton.click();
    })

    it ("Filter produc amount", () => {
      //selesct 12
      HomePage.productAmountField.click();
      HomePage.productAmountFieldOption.contains("12").click();
      //validate that we see 12
      HomePage.validateProductAmount.should("have.length", 12);
      //select 24
      HomePage.productAmountField.click();
      HomePage.productAmountFieldOption.contains("24").click();
      //validate that we see 24
      HomePage.validateProductAmount.should("have.length", 24);
      //select 36
      HomePage.productAmountField.click();
      HomePage.productAmountFieldOption.contains("36").click();
      //validate that we se 35
      HomePage.validateProductAmount.should("have.length", 35);
    })
    it.only ("Validate item rewiev", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("king{enter}");
      SearchResultsPage.product.contains("King of the Hill").click();
      SearchResultsPage.clickOnRewievButton.click();
      SearchResultsPage.validateRewiev.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
    })
  });
});
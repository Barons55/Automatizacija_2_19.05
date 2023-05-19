import TextBoxPage from "../../pageObjects/TextBox.page";
import CheckBoxPage from "../../pageObjects/CheckBox.page";
import RadioButtonPage from "../../pageObjects/RadioButton.page";
import ButtonsPage from "../../pageObjects/Buttons.page";

describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Textbox - positive case", () => {
      //Set full name
      TextBoxPage.usernameField.type("Barons");
      //set email
      TextBoxPage.emailField.type("random@gmail.com");
      //set addres
      TextBoxPage.currentAddressField.type("Valmiera");
      //set permanent address
      TextBoxPage.permanentAddressField.type("Valmiera");
      //click submit
      TextBoxPage.submitButton.click();
      //validate that values aer correct
      TextBoxPage.nameInfo.should("have.text", "Name:Barons");
      TextBoxPage.emailInfo.should("have.text", "Email:random@gmail.com");
      TextBoxPage.currentAddressInfo.should("have.text", "Current Address :Valmiera ");
      TextBoxPage.permanentAddressInfo.should("contain.text", 'Permananet Address :Valmiera');
    });

    it("Textbox - Negative case", () => {
      //Set Email field with wrong value
      TextBoxPage.emailField.type("random@email@xxx.com");
      //click submit button
      TextBoxPage.submitButton.click();
      //validate that the email field has red bar
      TextBoxPage.fieldError.should("be.visible");
      TextBoxPage.emailField.should("have.class", "field-error");
      
    });
  });
  context("Checkbox scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it ("Check value - Note, Angular, Private, Excel file.doc", () => {
      //click expand button
      CheckBoxPage.plusButton.click();
      //select values - notes, angular, private, excel file.doc
      CheckBoxPage.fileBoxCheck.contains("Notes").click();
      CheckBoxPage.fileBoxCheck.contains("Angular").click();
      CheckBoxPage.fileBoxCheck.contains("Private").click();
      CheckBoxPage.fileBoxCheck.contains("Excel File.doc").click();
      //validate that info line containes checked values
      CheckBoxPage.fileBoxValidate.should("contain.text","notes");
      CheckBoxPage.fileBoxValidate.should("contain.text","angular");
      CheckBoxPage.fileBoxValidate.should("contain.text","private");
      CheckBoxPage.fileBoxValidate.should("contain.text","excelFile");
    })

    it ("Check value - Office", () => {
      //Click Expand button
      CheckBoxPage.plusButton.click();
      // select value - office
      CheckBoxPage.fileBoxCheck.contains("Office").click();
      //Validate - office public private classified general
      CheckBoxPage.fileBoxValidate.should("contain.text","office");
      CheckBoxPage.fileBoxValidate.should("contain.text","private");
      CheckBoxPage.fileBoxValidate.should("contain.text","classified");
      CheckBoxPage.fileBoxValidate.should("contain.text","general");
    })
  });
  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it ("Click radio buttons", () => {
      //click Yes button
      RadioButtonPage.clickYesButton.click({force: true});
      //validate yes button clicked
      RadioButtonPage.validateClickedButton.should("contain.text","Yes" )
      //click impressive button
      RadioButtonPage.clickImpresiveButton.click({force: true});
      //validate impresive button clicked
      RadioButtonPage.validateClickedButton.should("contain.text","Impressive" )
      //validate that no button is unclikable/disabled
      RadioButtonPage.checkNoButton.should("have.class", "disabled");
    })
  })
  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });
    it.only ("Click buttons", () => {
      //click double click button
      ButtonsPage.clickDoubleButton.dblclick()
      //validate double click button
      ButtonsPage.validateDoubleButton.should("contain.text", "You have done a double click");
      //click right click button
      ButtonsPage.clickRightClickButton.rightclick();
      //validate right click button
      ButtonsPage.validateRightClickButton.should("contain.text", "You have done a right click");
      //click dynamic button
      ButtonsPage.clickDynamicButton.click();
      //validate the dynamic button
      ButtonsPage.validateDynamicButton.should("contain.text", "You have done a dynamic click");
    })
  })
});
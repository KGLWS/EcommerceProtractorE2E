const homePage = require("../pages/home.js");
const EC = protractor.ExpectedConditions;

const userLogin = function newUserName() {
  this.signIn = function newSignIn() {
    expect(EC.visibilityOf(homePage.signInIcon));
    homePage.signInIcon.click();
  };
  this.signOut = function newSignOut(){
     expect(EC.visibilityOf(homePage.signOut));
     homePage.signOut.click();
     browser.sleep(1000);
  }

  this.createNewAcc = function newCreateNewAcc() {
    expect(EC.visibilityOf(homePage.emailAddress));
    var email = "";
    var nameResult = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    var emailIndex = ["@gmail.com", "@yahoo.com", "@doc-mail.net"];
    var mailResult = emailIndex[Math.floor(Math.random() * emailIndex.length)];
    for (var i = 0; i < 8; i++) {
      nameResult += characters.charAt(Math.random() * charactersLength);
    }
    email = nameResult + mailResult;
    homePage.emailAddress.sendKeys(email);
    expect(EC.visibilityOf(homePage.submitCreate));
    homePage.submitCreate.click();
    browser.sleep(3000);
  };
};
module.exports = new userLogin();

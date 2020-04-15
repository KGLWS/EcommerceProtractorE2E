const EC = protractor.ExpectedConditions;
const homePage = require("../pages/home.js");

const authentication = function newAuthentication() {
  const userName = process.env.userName || "";
  const password = process.env.password || "";

  const invUserName = process.env.invUserName || "test.frame44@gmail.com";
  const invPassword = process.env.invPassword || "tEST@AVTOMA";

  this.loginInApp = function newLoginInApp() {
    browser.sleep(2000).then(() => {
      browser.getCurrentUrl().then((link) => {
        const eCommerceApp =
          "http://automationpractice.com/index.php?controller=authentication&back=my-account";
        const bankingApp =
          "http://www.way2automation.com/angularjs-protractor/banking/#/login";

        if (link === eCommerceApp) {
          expect(link).toEqual(eCommerceApp);
          console.log("eCommerce demo app is running");
          expect(EC.visibilityOf(homePage.emailAddress));
          expect(EC.visibilityOf(homePage.password));
          homePage.emailAddress.sendKeys(userName);
          homePage.password.sendKeys(password);
          homePage.submitLogin.click();
          browser.sleep(1000).then(() => {
            homePage.myAccountTitle.getText().then((title) => {
              expect(title).toEqual("MY ACCOUNT");
            });
          });
        } else if (link === bankingApp) {
          expect(link).toEqual(bankingApp);
          console.log("banking demo app is running");
        } else {
          console.log("didn't work");
        }
      });
    });
  };
  this.invalidloginInApp = function newInvalidLoginInApp() {
    browser.sleep(2000).then(() => {
      browser.getCurrentUrl().then((link) => {
        const eCommerceApp =
          "http://automationpractice.com/index.php?controller=authentication&back=my-account";
        const bankingApp =
          "http://www.way2automation.com/angularjs-protractor/banking/#/login";

        if (link === eCommerceApp) {
          expect(link).toEqual(eCommerceApp);
          console.log("eCommerce demo app is running");
          expect(EC.visibilityOf(homePage.emailAddress));
          expect(EC.visibilityOf(homePage.password));
          homePage.emailAddress.sendKeys(invUserName);
          homePage.password.sendKeys(invPassword);
          homePage.submitLogin.click();
          browser.sleep(1000).then(() => {
            homePage.failedAuth.getText().then((failedTitle) => {
              expect(failedTitle).toEqual("Authentication failed.");
            });
            homePage.failedAuthMsg.getText().then((failedMsg) => {
              expect(failedMsg).toEqual("There is 1 error");
            });
          });
        } else if (link === bankingApp) {
          expect(link).toEqual(bankingApp);
          console.log("banking demo app is running");
        } else {
          console.log("didn't work");
        }
      });
    });
  };
};
module.exports = new authentication();

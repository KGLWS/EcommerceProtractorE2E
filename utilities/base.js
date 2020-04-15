
const base = function newBase() {
  this.eCommerceUrl = "http://automationpractice.com/index.php";
  this.bankingUrl = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
  this.navigateToHome = function () {

    if(browser.params.env === 'ec'){
      browser.get(this.eCommerceUrl)
    }else if(browser.params.env === 'ba'){
      browser.get(this.bankingUrl)
    }else{
      console.log("\x1b[31m"+'check command');
    }
  };
};
module.exports = new base();

const homePage = require("../pages/home.js");
const EC = protractor.ExpectedConditions;

const globalSearch = function newGlobalSearch() {
  //searches for existed women items
  this.womenSection = function newWomenSectionSearch() {
    expect(EC.visibilityOf(homePage.mainPageTitle));
    var womenItems = [
      "T-shirts",
      "Blouses",
      "Casual-Dresses",
      "Evening-Dresses",
      "Summer-Dresses",
    ];
    var womenSearch = womenItems[Math.floor(Math.random() * womenItems.length)];
    expect(EC.visibilityOf(homePage.searchBox));
    homePage.searchBox.clear();
    homePage.searchBox.sendKeys(womenSearch);
    homePage.searchIcon.click();
  };

  //searches for existed dresses items
  this.dressesSection = function newWomenSectionSearch() {
    expect(EC.visibilityOf(homePage.mainPageTitle));
    var dressesItems = [
      "CASUAL-DRESSES",
      "EVENING-DRESSES",
      "SUMMER-DRESSES",
      "casual-dresses",
      "evening-Dresses",
      "Summer-Dresses",
    ];
    var dressesSearch =
      dressesItems[Math.floor(Math.random() * dressesItems.length)];
    expect(EC.visibilityOf(homePage.searchBox));
    homePage.searchBox.clear();
    homePage.searchBox.sendKeys(dressesSearch);
    homePage.searchIcon.click();
  };

  //searches for existed T-SHIRTS items
  this.tshirtSection = function newtshirtSectionSearch() {
    expect(EC.visibilityOf(homePage.mainPageTitle));
    var tshirtItems = [
      "t-shirts",
      "T-SHIRTS",
      "T-shirts",
      "t-SHIRTS",
      "TSHIRTS",
      "tSHIRTS",
    ];
    var tshirtSearch =
      tshirtItems[Math.floor(Math.random() * tshirtItems.length)];
    expect(EC.visibilityOf(homePage.searchBox));
    homePage.searchBox.clear();
    homePage.searchBox.sendKeys(tshirtSearch);
    homePage.searchIcon.click();
  };

  //1 result has been found. Result has to be more than 0
  this.assertResult = function positiveAssertResult() {
    homePage.itemFound.getText().then((numResult) => {
      let b = numResult.replace(/^\D+/g, "");
      let c = b.substring(0, 1);
      let d = parseInt(c);
      expect(d).not.toEqual(0);
      // console.log(d)

      //assert how many items showing after search
      homePage.numOfShowItems.getText().then((numOfItemsShowing) => {
        let l = numOfItemsShowing.replace(/^\D+/g, "");
        let m = l.substring(6, 4);
        let n = parseInt(m);
        expect(n).toEqual(d);
        //console.log(n);
      });
    });

    //assert search box returns exact items in title text
    homePage.itemFound.getText().then((titleResult) => {
      homePage.searchInput.getText().then((sometext) => {
        expect(titleResult).toContain(sometext);
      });
    });
  };
};
module.exports = new globalSearch();

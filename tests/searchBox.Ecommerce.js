const globalSearch = require('../utilities/searchBox.Ecomm.functions.js');
const userLogin = require('../utilities/login.Ecomm.functions.js');
const base = require('../utilities/base.js')


describe('Navigate to YourLogo app and login with your credentials', () => {
    beforeAll(() =>{
        browser.waitForAngularEnabled(false);
       base.navigateToHome();
    })

    // xit('Given customer: should login using valid login and password', () => {
    //    // userLogin.signIn();
    // })

    it('When customer: search random womens items in global search box', () => {
        globalSearch.womenSection();
    })
    it('Then:assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    })

    it('When customer: search random dresses items in global search box', () => {
        globalSearch.dressesSection();
    })
    it('Then:assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    })

    it('When customer: search random tshirt items in global search box', () => {
        globalSearch.tshirtSection();
    })
    it('Then: assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    });
});
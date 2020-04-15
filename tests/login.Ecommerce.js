const userLogin = require('../utilities/login.Ecomm.functions.js');
const base = require('../utilities/base.js')
const auth = require('../utilities/authentication.js');

describe('Navigate to YourLogo app and login with your credentials', () => {
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        base.navigateToHome();
    })

    it('should login using valid login and password', () => {
        userLogin.signIn();
            auth.loginInApp();
            userLogin.signOut();
    });

    it('should login using Invalid login and password', () => {
        userLogin.signIn();
            auth.invalidloginInApp();
    });
});
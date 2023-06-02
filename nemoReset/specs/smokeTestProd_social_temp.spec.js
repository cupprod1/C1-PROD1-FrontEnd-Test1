var screenshots = require('./../lib/screenshots');
var testData = require('../testdata/nemoResetTestData.js');

describe('Cambridge One APP - Social Account Login', function () {

    before(function (browser, done) {              
        
        nemoLaunchPageObj = browser.page['nemoLaunch.page']();
        nemoLoginPageObj = browser.page['login.page']();
        
        browser
          .url("https://www.facebook.com/", function() {
            console.log("URL: https://www.facebook.com/ launched successfully")
          })
          .maximizeWindow(function() {
            done();
          });
    });

    it('Verify that the learning path app and class app are working', function(browser) {
        
        nemoLoginPageObj.loginWithFacebookCredentials('cqatestsocial2@gmail.com',"Compro@12345");
        studentDashboard = browser.page['studentDashboard.page']();
        browser.waitForElementVisible('div.heading1',25000,"C1 Login with Facebook was not successful");
    });   

    after(function (browser, done) {
        //close browser
        if (browser.sessionId) {
            browser.end(function () {
                done();
            });
        } else {
            done();
        }
    });
});

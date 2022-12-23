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
        
        nemoLoginPageObj.loginWithFacebookCredentials('cqatestsocial@gmail.com',"Compro@123456");
        studentDashboard = browser.page['studentDashboard.page']();
        studentDashboard.waitForProductAppear();
        studentDashboard.practiceextraopen();
        nemoClassLearningPathwayPageObj= browser.page['classLearningPathway.page']();
        studentDashboard.waitForFrame();
        browser.pause(20000);
        nemoClassLearningPathwayPageObj.goback();
        studentDashboard.waitForProductAppear();
        studentDashboard.goToClass2();
        studentDashboard.waitForAnalytic();
        headerPageObj = browser.page['header.page']();
        headerPageObj.clickUserProfileDropdown();
        headerPageObj.waitForLogoutToAppear();
        headerPageObj.clickLogout();
        browser.pause(5000);
        nemoLaunchPageObj.waitForLoginButtonToBePresent();
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

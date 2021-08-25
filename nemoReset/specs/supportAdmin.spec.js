var screenshots = require('./../lib/screenshots');
var testData = require('../testdata/nemoResetTestData.js');

describe('Cambridge One APP', function () {
    //Variable Declaration
    var password;

    before(function (browser, done) {              
        password = testData.nemoReset.teacher.password;
        a_password='#compro@1254';
        studentDashboard = testData.nemoReset.studentDashboard;                        
        username_admin = 'admin1_aberystwyth_prod1@comprodls.com';            
        studentOnboardingPageObj = browser.page['studentOnboarding.page']();
        done();
        //Create object of nemo launch page
        nemoLaunchPageObj = browser.page['nemoLaunch.page']();
        //Launch nemo url
        nemoLaunchPageObj.navigate();
        //Wait for the nemo launch page to appear
        //nemoLaunchPageObj.waitForGetStartedButtonToAppear();
        nemoLaunchPageObj.waitForLoginButtonToBePresent();  // changed to match alpha test
        //Wait for login button
        //nemoLaunchPageObj.waitForLoginButtonToBePresent();
        //Create object for login page
        nemoLoginPageObj = browser.page['login.page']();
        //Wait for login page
        headerPageObj = browser.page['header.page']();
         done();
    });

    it('Support-Admin Login and access dashboard', function (browser) {
        browser.url('https://www.cambridgeone.org?p=@cambridge.org&t=saml');
        browser.pause(20000);
        browser.window_handles(function(result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        });
        nemoSupportAdminDashboardPageObj = browser.page['nemoSupportAdminDashboard.page']();
        nemoSupportAdminDashboardPageObj.waitForOktalogin();
        browser.pause(20000);
        browser.window_handles(function(result) {
            var handle = result.value[0];
            browser.switchWindow(handle);
        });
        nemoSupportAdminDashboardPageObj.waitForSearchBox();                
    }); 

    // xit('Login with google account', function (browser) {  
    //     nemoLaunchPageObj.clickLogin();
    //    // nemoLaunchPageObj.waitForLoginButtonToBePresent();
    //     nemoLoginPageObj = browser.page['login.page']();
    //     nemoLoginPageObj.waitForPageLoad();
    //     nemoLoginPageObj.LoginWithGoogleOption();
    //     //switch window
    //     browser.window_handles(function(result) { 
    //         browser.switchWindow(result.value[1]);
    //         nemoLoginPageObj.loginWithGoogleCredentials("cupprod1@gmail.com","Compro11");    
    //     });    
    //     //switch back to original window
    //     browser.window_handles(function(result) {
    //         headerPageObj = browser.page['header.page']();
    //         browser.switchWindow(result.value[0]);  
    //         headerPageObj.waitForWelcomeMsg(); 
    //     }); 
    // });   


    afterEach(function (browser, done) {
      //  take screenshot on every test completion
        screenshots.takeScreenshot(browser);
        done();
        //Logout
        headerPageObj = browser.page['header.page']();
        headerPageObj.clickUserProfileDropdown3();
        headerPageObj.waitForLogoutToAppear();
        headerPageObj.clickLogout();
        nemoLaunchPageObj.waitForLoginButtonToBePresent();
        done();
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

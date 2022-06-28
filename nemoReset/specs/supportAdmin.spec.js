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
        browser.url('https://cup.okta.com/login/login.htm?fromURI=%2Fapp%2Fcambridgeuniversitypress_gigyapressplatformlive_1%2Fexk9v6qlr1h0yk6MT1t7%2Fsso%2Fsaml%3FSAMLRequest%3DtZJBj9owEIX%252FSpQ7cZxQKBYgRcu2ZAsLBdrSXtDgOOAlsY3HYeHfN8mq7e6hvfVmjebpfW%252BehwhlYVhSuaNaiXMl0HnpZOQf5OEGUTcWeR5RiPc0gy7kA4CQcujtRQxZxjMavve9r8Ki1GrkR0HoeyliJVKFDpSrR2EUdsJ%252BJ4o3YY%252B967GoG0SDH743qY2kAtcKj84ZZITwygT65CDguiRgDOFQ7q3MDqJS8tLYuJuxAnHX4rVPU4DLtS2LemFHibieBpfeubD0GN5OvfmGuj5B1KTJ6XsftOWiDTvycyhQNMBLQKzVvycJorAN2Z1WWJXCroW9SC6%252BrGZ%252FWHOZlYGoaNCitMSNBbnUVyDx7nFL7eJpnu4fktVerWe3xT2X5%252Ftusgk%252FHfW37WfI%252B6dtuozpcnE9Tul3mkwn8PRxOjW7wRYfCBoCHH3vWhYKWdvSyK%252BsYhpQIlNQCmSOs3Uyn7Hakxmrnea68MfDZpu1RdhX%252Bn%252FL4Vdof%252Fwm4v%252BJNySvGF%252BADXusodLJUheS35qmSnB%252FZ6YBbScy6%252BTtKqsUGsFlLkVWd1gU%252BvnOCnB1r85Wda1k%252FOL69rePfwI%253D%26RelayState%3Dtk1.OQrQt_9PoFOeMFHd_AFmt87yma00SOepxlogCzHJ1sw%26SigAlg%3Dhttp%253A%252F%252Fwww.w3.org%252F2000%252F09%252Fxmldsig%2523rsa-sha1%26Signature%3DKgsu0IU6PtrJfXVRDH8vpK9SzlxY3nK7uImpA22naCoyNSBUSpTlAUDwefyo6cp2V91IPlvzbIG%252FsyGXGfIsYOsYsgeAkgHO45%252BVBrFtOvINRwCsJHI7Cz9Z1%252BkQcZZmcAEpmZyScCUU1q8NNgKoKc8%252FvRhAOmgexzF95XTtPiOsLb%252Fo9BwltcEv1TotRt0G11Wp261joPtuvsR7N6e7AJFGhnaU3Ez3jfEHr6PlWbCcEHmuR557iM5J%252F7lVGnEiGUSBV1OpoYZdsh2UdVTdbgb6n2FSNlsQw3221jYkJU2g2FQxT%252B8qgivqtk%252FpYexhj6jbCkEvhQz9Btgi%252F8w3Ww%253D%253D');
        browser.pause(20000);
        nemoSupportAdminDashboardPageObj = browser.page['nemoSupportAdminDashboard.page']();
        nemoSupportAdminDashboardPageObj.waitForOktalogin();
        browser.url('https://www.cambridgeone.org?p=@cambridge.org&t=saml');
        browser.pause(20000);
        nemoSupportAdminDashboardPageObj.waitForSearchBox();                
    }); 

    xit('Login with google account', function (browser) {  
        nemoLaunchPageObj.clickLogin();
       // nemoLaunchPageObj.waitForLoginButtonToBePresent();
        nemoLoginPageObj = browser.page['login.page']();
        nemoLoginPageObj.waitForPageLoad();
        nemoLoginPageObj.LoginWithGoogleOption();
        //switch window
        browser.window_handles(function(result) { 
            browser.switchWindow(result.value[1]);
            nemoLoginPageObj.loginWithGoogleCredentials("cupprod1@gmail.com","Compro11");    
        });    
        //switch back to original window
        browser.window_handles(function(result) {
            headerPageObj = browser.page['header.page']();
            browser.switchWindow(result.value[0]);  
            headerPageObj.waitForWelcomeMsg(); 
        }); 
    });   


    afterEach(function (browser, done) {
      //  take screenshot on every test completion
        screenshots.takeScreenshot(browser);
        done();
        //Logout
        headerPageObj = browser.page['header.page']();
        headerPageObj.clickUserProfileDropdown2();
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

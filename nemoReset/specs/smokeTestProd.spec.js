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
        console.log("Launching URL: " + browser.globals.test.launchUrl)
        nemoLaunchPageObj.navigate();
        browser.perform(function() {
            testlog.info("URL: " + browser.globals.test.launchUrl + " launched successfully")
        })
        //Wait for the nemo launch page to appear
        //nemoLaunchPageObj.waitForGetStartedButtonToAppear();
        browser.pause(3000);
        nemoLaunchPageObj.waitForLoginButtonToBePresent();  // changed to match alpha test
        nemoLaunchPageObj.clickLogin();
        browser.pause(3000);
        //Wait for login button
        //nemoLaunchPageObj.waitForLoginButtonToBePresent();
        //Create object for login page
        nemoLoginPageObj = browser.page['login.page']();
        //Wait for login page
        nemoLoginPageObj.waitForPageLoad();
        headerPageObj = browser.page['header.page']();
         done();
    });

    it('Verify that the learning path app and class app are working', function(browser) {
        //Wait for login button
        // nemoLaunchPageObj.waitForLoginButtonToBePresent();
        // //Click login button
        // nemoLaunchPageObj.clickLogin();
        //Create object for login page
        nemoLoginPageObj = browser.page['login.page']();
        //Wait for login page
        //nemoLoginPageObj.waitForPageLoad();
        nemoLoginPageObj.login('cqaproduser2@gmail.com',"Compro11");
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
    });   

    it('Admin Login and access dashboard', function (browser) {  
        nemoLaunchPageObj.clickLogin();
       // nemoLaunchPageObj.waitForLoginButtonToBePresent();
        nemoLoginPageObj = browser.page['login.page']();
        browser.pause(3000);
        nemoLoginPageObj.waitForPageLoad();
        nemoLoginPageObj.login(username_admin,a_password);
        nemoAdminDashboardPageObj = browser.page['nemoAdminDashboard.page']();
        nemoAdminDashboardPageObj.waitForTabs();
        //count of tabs
        browser.elements('css selector',"li.nav-item",function(result){   //Need to change the selector for teacher/admin
            if(result.value.length !=4)
            {
                browser.assert.fail('Tabs Count do not match');
            }
        });   
    });   

    afterEach(function (browser, done) {
      //  take screenshot on every test completion
        // screenshots.takeScreenshot(browser);
        done();
        //Logout
        headerPageObj = browser.page['header.page']();
        headerPageObj.clickUserProfileDropdown();
        headerPageObj.waitForLogoutToAppear();
        headerPageObj.clickLogout();
        browser.pause(5000);
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

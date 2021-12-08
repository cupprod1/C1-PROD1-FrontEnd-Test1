var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
    url: function () {
        return (this.api.globals.test.launchUrl);
    },
    elements: {
        getStartedButton: {
            //selector: '[class*="btn-started"][href*="regoptions"]'
            selector:'p[class="home-actions"]>a[class*="btn-started"]'
        },
        logIn: {
            //selector: '[href="/login"]'
            selector: '#onboarding-header-login-btn'
        }
    },
    commands: [
        {
            waitForGetStartedButtonToAppear: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.getStartedButton.selector,30000);
            },
            getTextOfGetStartedButton: function(callback){
                this.api.useCss();
                actions.getElementText(this,this.elements.getStartedButton.selector,callback)
            },
            clickGetStartedButton: function(){
                this.api.useCss();
                actions.click(this,this.elements.getStartedButton.selector)
            },
            waitForLoginButtonToBePresent: function(){
                this.api.perform(function() {
                    testlog.info("Waiting for Login button to appear on home page")
                })
                this.api.useCss();
                this.api.waitForElementPresent(this.elements.logIn.selector,60000,"Login Button is not visible on home page");
                this.api.perform(function() {
                    testlog.info("Login button is visible on home page")
                })
            },
            clickLogin: function(){
                this.api.perform(function() {
                    testlog.info("Clicking Login button on home page")
                })
                this.api.useCss();
                this.api.click(this.elements.logIn.selector, function(result) {
                    this.assert.equal(result.status, 0, "Login Button is not clickable on home page");
                })
                this.api.perform(function() {
                    testlog.info("Login button is clicked successfully on home page")
                })
            }
        }
    ]
};

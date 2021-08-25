var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");

module.exports = {
    elements: {
        userProfileDropdown: {
            selector: '#dropdownMenuLink'
        },

        userProfileDropdown2: {
            selector: '#dropdownMenuLinkHeader'
        },
        logout: {
            // selector: '[class*="dropdown-menu"] [class*="logout"]'
            selector: '.logout button'
        },
        logo: {
            selector: "[qid='cHeader-1'] [src*='cup-logo']"
        },
        welcome: {
            selector: ".start-learning-container .welcome "
        }
    },
    commands: [
        {
            clickUserProfileDropdown: function(){
                this.api.perform(function() {
                    testlog.info("Clicking User Profile dropdown")
                })
                this.api.useCss();
                this.api.click(this.elements.userProfileDropdown.selector, function(result) {
                    this.assert.equal(result.status, 0, "User Profile dropdown button is not clickable");
                })
                this.api.perform(function() {
                    testlog.info("User Profile dropdown is clicked successfully")
                })
            },

            clickUserProfileDropdown2: function(){
                this.api.perform(function() {
                    testlog.info("Clicking User Profile dropdown")
                })
                this.api.useCss();
                this.api.click(this.elements.userProfileDropdown2.selector, function(result) {
                    this.assert.equal(result.status, 0, "User Profile dropdown button is not clickable");
                })
                this.api.perform(function() {
                    testlog.info("User Profile dropdown is clicked successfully")
                })
            },
            waitForLogoutToAppear: function(){
                this.api.perform(function() {
                    testlog.info("Waiting for Logout button to appear")
                })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.logout.selector,30000,"Logout button is not visible");
                this.api.perform(function() {
                    testlog.info("Logout button is visible")
                })
            },
            clickLogout: function(){
                this.api.perform(function() {
                    testlog.info("Clicking Logout button")
                })
                this.api.useCss();
                this.api.click(this.elements.logout.selector, function(result) {
                    this.assert.equal(result.status, 0, "Logout Button is not clickable");
                })
                this.api.perform(function() {
                    testlog.info("Logout button is clicked successfully")
                })
            },
            waitForLogoToAppear: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.logo.selector,60000);
            },
            clickLogo: function(){
                this.api.useCss();
                actions.click(this,this.elements.logo.selector);
            },
            waitForWelcomeMsg: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.welcome.selector,100000);       
            }
        }
    ]
};

var actions = require("./../lib/browserAction.js");

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
                this.api.useCss();
                actions.click(this,this.elements.userProfileDropdown.selector);
            },
            clickUserProfileDropdown2: function(){
                this.api.useCss();
                actions.click(this,this.elements.userProfileDropdown2.selector);
            },
            waitForLogoutToAppear: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.logout.selector,30000);
            },
            clickLogout: function(){
                this.api.useCss();
                actions.click(this,this.elements.logout.selector);
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

var action = require('../lib/browserAction');
require("./../lib/logging.js");

var loginCommands = {

    waitForPageLoad: function(){
        this.api.perform(function() {
            testlog.info("Waiting for Login Page to get loaded")
        })
        this.api.waitForElementVisible(this.elements.username.selector,25000,"Login Page is not loaded successfully");
        this.api.perform(function() {
            testlog.info("Login Page is loaded successfully")
        })
    },
    login: function(username,password)
    {
        this.api.perform(function() {
            testlog.info("Entering login details")
        })
        this.api.waitForElementVisible(this.elements.username.selector,25000,"Username field is not visible on Login page");
        this.api.setValue(this.elements.username.selector,username);
        this.api.setValue(this.elements.password.selector,password);
        this.api.click(this.elements.submitButton.selector, function(result) {
            this.assert.equal(result.status, 0, "Login Button is not clickable");
        })
        this.api.perform(function() {
            testlog.info("Login Button is clicked successfully")
        })
    },
    LoginWithGoogleOption: function() {
        action.waitForElementVisible(this,this.elements.googleOption.selector,50000);
        action.click(this,'@googleOption');
    },
    loginWithGoogleCredentials: function(email, pass) {
        action.waitForElementVisible(this,this.elements.googleUsername.selector,50000);
        action.setValue(this,'@googleUsername',email);
        action.click(this,'@googleNext');
        action.waitForElementVisible(this,this.elements.googlePass.selector,50000);
        action.setValue(this,'@googlePass',pass);
        action.click(this,'@googleNext2');
    },

    loginWithFacebookCredentials: function(username,password)
    {
        var browserVar = this.api
        var this2 = this
        this.api.perform(function() {
            testlog.info("Entering login details on Facebook page")
        })
        this.api.waitForElementVisible(this.elements.facebookEmail.selector,25000,"Facebook Page is not launched");
        this.api.setValue(this.elements.facebookEmail.selector,username);
        this.api.waitForElementVisible(this.elements.facebookPassword.selector,25000,"Facebook Password is not present");
        this.api.setValue(this.elements.facebookPassword.selector,password);
        this.api.waitForElementVisible(this.elements.facebookLogIn.selector,25000,"Facebook Login Button is not present");
        this.api.click(this.elements.facebookLogIn.selector, function(result) {
            this.assert.equal(result.status, 0, "Facebook Log In Button is not clickable");
        })
        this.api.useXpath();
        this.api.element('xpath', '//*[contains(text(), "Check the login details shown. Was it you?")]', function(result) {
           console.log(result.status)
           if(result.status != -1){
                browserVar.click('//button[contains(text(), "Yes")]')
            }
        });
        this.api.pause(10000)
        this.api.waitForElementVisible("//*[contains(text(), 'Stories')]",25000,"Facebook Login not successful");
        this.api.useCss();
    },
};

module.exports = {

    url: function () {
        return (this.api.globals.test.launchUrl);
    },

    commands: [loginCommands],

    elements: {
        username: {
            selector: '#gigya-login-form input[name="username"]' // Update the selector value based on your application
        },
        password: {
            selector: '#gigya-login-form input[name="password"]' // Update the selector value based on your application
        },
        submitButton: {
            selector: '#gigya-login-form input[type="submit"]' // Update the selector value based on your application
        },
        googleOption: {
            selector: ".gigya-login-providers-list .gigya-login-provider:nth-of-type(2) .tabbing-button"
        },
        googleUsername: {
            selector: "#identifierId"
        },
        googleNext: {
            selector: "#identifierNext"
        },
        googlePass: {
            selector: 'input[type="password"]'
        },
        googleNext2: {
            selector: "#passwordNext"
        },
        facebook: {
            selector: "div.app-container button#Facebook_btn"
        },
        facebookEmail: {
            selector: "#email"
        },
        facebookPassword: {
            selector: "#pass"
        },
        facebookLogIn: {
            selector: 'button[name="login"]'
        }
    }
};

var actions = require("./../lib/browserAction.js");
var format = require("string-template");
var CryptoJS = require("crypto-js")

module.exports = {
    elements: {
        login_input:{
            selector:'#okta-signin-username'
        },
        login_password:{
            selector:'#okta-signin-password'
        },
        signin_submit:{
            selector:'#okta-signin-submit'
        },
        s_question:{
          //  selector:'#input66'
          //selector: '.password-with-toggle'
          selector: '[name="answer"]'
        },
        verify_btn:{
            selector:'input[value="Verify"]'
        },
        search:{
            selector:'[qid="sad-1"]'
        },
        searchbtn:{
            selector:'[qid="sad-3"]'
        },
        adminmenu:{
            selector:'.admin-menu ul'
        }
    },
    commands: [
        { 
            waitForOktalogin:function(){

                let password  = CryptoJS.AES.decrypt("U2FsdGVkX19oEsAdKi8sPVT0yADTkLZ2hT8gJCPLMFE=", key);
                let decryptPassword = password.toString(CryptoJS.enc.Utf8);
                
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.login_input.selector,50000);
                actions.setValue(this,this.elements.login_input.selector,'mmehta');
                actions.setValue(this,this.elements.login_password.selector,decryptPassword);
                actions.waitForElementVisible(this,this.elements.signin_submit.selector,50000);
                actions.click(this,this.elements.signin_submit.selector);
                actions.waitForElementVisible(this,this.elements.s_question.selector,50000);
                actions.setValue(this,this.elements.s_question.selector,'bhiwani');
                actions.waitForElementVisible(this,this.elements.verify_btn.selector,50000);
                actions.click(this,this.elements.verify_btn.selector);
                this.api.pause(10000);
            },
            waitForSearchBox:function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.search.selector,50000);
                actions.setValue(this,this.elements.search.selector,'a');
                actions.waitForElementVisible(this,this.elements.searchbtn.selector,50000);
                actions.click(this,this.elements.searchbtn.selector);
                actions.waitForElementVisible(this,this.elements.adminmenu.selector,50000);
            }
        }
    ]
};

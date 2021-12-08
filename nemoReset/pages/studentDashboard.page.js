var action = require("./../lib/browserAction.js");
var format = require("string-template");

module.exports = {
    elements: {
        welcome_msg: {
            selector: 'div.welcome-msg' // Update the selector value based on your application
        },
       class:{
           selector:'.courses .practice-image'
       },
       productaddbtn:{
           selector:'.d-flex .product-add'
       },
       productcodeinput:{
            selector:'#activationCodeInput'
       },
       activatebtn:{
        selector:'form [type="submit"]'
       },
       joinclass:{
           selector:'//*[contains(text(),"{LEARNINGCLASS}")]',
           locateStrategy: 'xpath'
       },
       classkeyinput:{
        selector:'#classKeyInput'
       },
       joinbtn:{
           selector:'.text-center [type="submit"]'
       },
       learnbtn:{
           selector:'.product-activation-code button'
       },
       verifyclass:{
        selector:'//*[contains(text(),"{CLASS_NAME}")]',
        locateStrategy: 'xpath'
       },
       classaddbtn:{
           selector:'div:nth-child(2) > a:nth-child(2)'
       },
       cqapracticeextra:{
        // selector:'//*[contains(text(),"Practice Extra")]',
        // locateStrategy: 'xpath'
        selector:".image-group .practice-image"
       },
       frameselec:{
          // selector:'.question-div .text-editor'
          selector: "#quill-container-pskill"
       },
       class2:{
           selector: ".courses .product-image"
       },
       analytics:{
           selector:".component-analytics .analytic-box"
       }
 },
    commands: [
        {
            waitForPageLoad: function(){
              this.api.perform(function() {
                  testlog.info("Waiting for Login Page to get loaded")
              })
                action.waitForElementVisible(this,'@welcome_msg',50000);
            },
            goToClass: function(){
                action.click(this,'@class');
            },
            waitForClassLoad:function(){
                action.waitForElementVisible(this,'@class',25000);
            },
            addProduct:function(){
                action.click(this,'@productaddbtn');
            },
            waitInputProductBox:function(){
                action.waitForElementVisible(this,'@productcodeinput',25000);
            },
            inputProductCode:function(code){
                action.setValue(this,'@productcodeinput',code);
            },
            clickActivate:function(){
                action.click(this,'@activatebtn');
            },
            waitActivatedSuccesfully:function(learnclass){
                var select3 = format(this.elements.joinclass.selector,{LEARNINGCLASS:learnclass});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);
            },
            clickJoinClass:function(learnclass){
                var select3 = format(this.elements.joinclass.selector,{LEARNINGCLASS:learnclass});
                this.api.useXpath();
                action.click(this,select3);
            },
            waitClassKeyInput:function(){
                action.waitForElementVisible(this,'@classkeyinput',25000);
            },
            inputClassKey:function(key){
                action.setValue(this,'@classkeyinput',key);
            },
            clickJoin:function(){
                action.click(this,'@joinbtn');
            },
            waitJoin:function(){
                action.waitForElementVisible(this,'@joinbtn',50000);
            },
            waitLearn:function(){
                action.waitForElementVisible(this,'@learnbtn',80000);
            },
            verifyJoinedClass(cname){
                var select3 = format(this.elements.verifyclass.selector,{CLASS_NAME:cname});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);
            },
            addClass:function(){
                action.click(this,'@classaddbtn');
            },
            clickLearn:function(){
                action.click(this,'@learnbtn');
            },
            waitForProductAppear: function(){
              this.api.perform(function() {
                  testlog.info("Waiting for Practice Extra Product to appear on Dashboard Page")
              })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.cqapracticeextra.selector,50000,"Practice Extra Product is not visible on Dashboard page");
                this.api.perform(function() {
                  testlog.info("Practice Extra Product is visible on Dashboard Page")
              })
            },
            practiceextraopen: function(){
              this.api.perform(function() {
                  testlog.info("Clicking Practice Extra on Dashboard page")
              })
                this.api.click(this.elements.cqapracticeextra.selector, function(result) {
                    this.assert.equal(result.status, 0, "Practice Extra is not clickable on Dashboard page");
                })
                this.api.perform(function() {
                  testlog.info("Practice Extra is clicked successfully on Dashboard page")
              })
            },
            waitForFrame: function(){
              this.api.perform(function() {
                  testlog.info("Waiting for PSkill to appear on Learning Page")
              })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.frameselec.selector,50000,"PSkill is not visible on Learning Page");         
              this.api.perform(function() {
                  testlog.info("PSkill is visible on Learning Page")
              })
            },
            goToClass2: function(){
              this.api.perform(function() {
                  testlog.info("Clicking on My Progress Tile on Dashboard page")
              })
                this.api.useCss();
                this.api.click(this.elements.class2.selector, function(result) {
                    this.assert.equal(result.status, 0, "My Progress Tile is not clickable on Dashboard page");
                })                
              this.api.perform(function() {
                  testlog.info("My Progress Tile is clicked successfully on Dashboard page")
              })
            },
            waitForAnalytic: function(){
              this.api.perform(function() {
                  testlog.info("Waiting for Analytics section to appear on Progress Page")
              })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.analytics.selector,50000,"Analytics section is not visible on Progress Page");           
              this.api.perform(function() {
                  testlog.info("Analytics section is visible on Progress Page")
              })
            }
        }

    ]
};

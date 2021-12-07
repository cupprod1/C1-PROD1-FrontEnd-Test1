var action = require("../lib/browserAction.js");
require("../lib/logging.js");
var format = require("string-template");

module.exports = {
    elements: {
       
        header: {
            selector:'.lo-renderer-wrapper .navbar'
        },
        PS: {
            selector:'//*[@title="{PRODUCTIVESKILL}"]',
            locateStrategy:'xpath'
        },
        nonScorable: {
            selector:'//*[@title="{NONSCORABLE}"]',
            locateStrategy:'xpath'
        },
        PStext:{
            selector:'.question-div .text-editor'          //*[@title="Sample Productive Skill"]
        },
        saveButton:{
            selector:'#saveAnswer-productiveSkill-btn'
        },
        checkSave:{
            selector: '//*[contains(text(),"{SAVED}")]',
            locateStrategy: 'xpath'
        },
        submitButton:{
            selector:'#submitAnswer-productiveSkill-btn'
        },
        finalsubmitButton:{
            selector:'#submitModal-productiveSkill-btn'
        },
        submittedmarking:{
            selector: '//*[contains(text(),"{SUBMITCHECK}")]',
            locateStrategy: 'xpath'
        },
        
        downloadable_item:{
            selector:'//*[@title="{DOWNLOADFILE}"]' ,
            locateStrategy:'xpath'    
        },
        download_link:{
            selector:'.download-container .download-link'
        },
        back_button:{
            selector:'.unit-header a:nth-of-type(1)'
        },
        unit_three:{
            selector:'[@title*="Unit 3"]'
        },
        scorable:{
            selector:'//*[@title="{SCORABLEACT}"]',
            locateStrategy:'xpath'
        },
        progressPS:{
            selector:'//span[text()="{PRODUCTIVESKILL}"]/../..//img',
            locateStrategy: 'xpath'
        },
      
       scorable_progress:{
           selector:'//span[text()="{SCORABLEACT}"]/../..//img',
           locateStrategy: 'xpath' 
       },
       drop1:{
           selector:'//*[@id="content-0"]/div/div/p/span/div/div',
           locateStrategy: 'xpath' 
       },
       iframe1: {
        selector: '#content-course-ext>iframe'
    },
      
       droptext:{
        selector:'//*[contains(text(),"The audio is about")]',
        locateStrategy: 'xpath' 
    },
    orange:{
        selector:'//*[@id="content-0"]/div/div/p/span/div/div/div/ul/li[3]',
        locateStrategy: 'xpath' 
    },
    checkbutton:{
    selector:'.checkAnsBtn'
    },
    nextbutton:{
        selector:'.nextQuesBtn'
    },    
    submit:{
        selector:'.submitBtn'
    },
    nextact:{
        selector:'.button-visible .nextActivityBtn'
    },
    score:{
        selector:'//span[text()="{SCORABLEACT}"]/../..//span[contains(@class,"activity-score")]',
        locateStrategy: 'xpath' 
    },
    star:{
        selector:'//span[text()="{ACTIVITYTYPE}"]/../..//i',
        locateStrategy: 'xpath' 
    },
    nonscorableact:{
        selector:'//*[@title="{NONSCORE}"]',
        locateStrategy:'xpath'
    },    
    unitsix:{
        selector:'//*[contains(text(),"Lesson 6")]',
        locateStrategy: 'xpath' 
    },
    unitfive:{
        selector:'//*[contains(text(),"Lesson 5")]',
        locateStrategy:'xpath'
    },
    input1:{
        selector:'//*[@id="content-0"]//input',        
            
        locateStrategy:'xpath'
    },
    input2:{       
        selector:'//*[@id="content-1"]//input',
        locateStrategy:'xpath'
    },
    input3:{
        selector:'//*[@id="content-2"]//input',
      
        locateStrategy:'xpath'
    },
    input:{
        selector:"//*[@id='content-{INPUT}']//input",      
        locateStrategy:'xpath'
    },
    inputnew:{
        selector: "#content-0 input"      
    },
    inputnew1:{
        selector: "#content-1 input"
    },
    inputnew2:{
        selector: "#content-2 input"
    },
    tocItem: {
        selector: '//*[contains(@title,"{TOCITEM}")]',
        locateStrategy:'xpath'
    },
    lesson4: {
        selector: '//*[contains(@title,"Lesson 4")]',
        locateStrategy:'xpath'
    },
    tocDropdown: {
        selector: "[qid='cHeader-9']"
    },
    activityCompletedImage: {
        selector: "#content-6 .score-progress canvas"
    },
    gobacksele: {
        selector: "[qid='lo-renderer-bck-btn']"
    },
    bignext: {
        selector: ".submitBtn"
    }
 },
    commands: [
        {

            waitForActivityInLP: function(scorablename){

                var select3 = format(this.elements.scorable.selector,{SCORABLEACT:scorablename});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);

              //  action.waitForElementVisible(this,'@header',25000);
            },
            goback: function(){
                this.api.perform(function() {
                  testlog.info("Clicking on Go Back button")
                })
                this.api.useCss();
                
                this.api.click(this.elements.gobacksele.selector, function(result) {
                    this.assert.equal(result.status, 0, "Go Back button is not clickable");
                })
                this.api.perform(function() {
                  testlog.info("Go Back button is clicked successfully")
                })
            },
            openPS: function(psskill){
                action.click(this,'@unitsix');
                
                var select3 = format(this.elements.PS.selector,{PRODUCTIVESKILL:psskill});
                this.api.useXpath();
               
                action.waitForElementVisible(this,select3,25000);
                action.click(this,select3);
            },
            waitToloadPS: function(){
                action.waitForElementVisible(this,'@PStext',25000);
            },
            fillTextInPS: function(textn){
                action.setValue(this,'@PStext',textn);
            },
            saveText: function(){
                action.click(this,'@saveButton');
            },
            waitForSave: function(savedmsg){
                var select3 = format(this.elements.checkSave.selector,{SAVED:savedmsg});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);
            },
            clickSubmit: function(){
                action.click(this,'@submitButton');
            },
            waitFinalSubmit: function(){
                action.waitForElementVisible(this,'@finalsubmitButton',25000);
            },
            clickFinalSubmit: function(){
                action.click(this,'@finalsubmitButton');
            },
            verifySubmit: function(submitmarking){
                var select3 = format(this.elements.submittedmarking.selector,{SUBMITCHECK:submitmarking});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);
            },

            openDownloadable: function(dwnld){
                this.api.useXpath();
                action.waitForElementVisible(this,'@unitfive',50000);
                this.api.useXpath();
                action.click(this,'@unitfive');
                var select3 = format(this.elements.downloadable_item.selector,{DOWNLOADFILE:dwnld});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);
                action.click(this,select3);
            },
            loadDownloadable: function(){
                
                action.waitForElementVisible(this,'@download_link',50000);
            },
            
            progressVisiblePS: function(psskill){
                

                var select3 = format(this.elements.progressPS.selector,{PRODUCTIVESKILL:psskill});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,25000);

            },
           

            openScorable: function(scorablename){
                var select3 = format(this.elements.scorable.selector,{SCORABLEACT:scorablename});
                this.api.useXpath();
                action.click(this,select3);

            },
          
            scorableProgress: function(scorablename){
                var select3 = format(this.elements.scorable_progress.selector,{SCORABLEACT:scorablename});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,80000);

            },
            
            enterinput1: function(inputtxt1){
                this.api.useXpath();
                action.setValue(this,this.elements.input1.selector,inputtxt1);
            },

            enterinput2: function(inputtxt2){
                this.api.useXpath();
                action.setValue(this,'@input2',inputtxt2);
            },
            enterinput3: function(inputtxt3){
                this.api.useXpath();
                action.setValue(this,'@input3',inputtxt3);
            },

            enterinput: function(input,inputText){
                var select = format(this.elements.input.selector,{INPUT:input});
                this.api.useXpath();
                action.setValue(this,select,inputText);
            },
            waitForFrame: function(){
                this.api.perform(function() {
                  testlog.info("Waiting for Frame to appear on Learning Product Page")
              })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.iframe1.selector,50000,"Frame is not visible on Learning Product Page");
                this.api.perform(function() {
                  testlog.info("Frame is visible on Learning Product Page")
              })
            },
            waitinput1: function(){                   
                this.api.useXpath();
                action.waitForElementVisible(this,this.elements.input1.selector,50000);
            },
            waitinput2: function(){                            
                this.api.useXpath();
                action.waitForElementVisible(this,this.elements.input2.selector,50000);
            },
            waitinput3: function(){                            
                this.api.useXpath();
                action.waitForElementVisible(this,this.elements.input3.selector,50000);
            },
            waitForInput: function(input){          
                var select = format(this.elements.input.selector,{INPUT:input});                  
                this.api.useXpath();
                action.waitForElementVisible(this,select,50000);
            },
            waitForInputnew: function(){               
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.inputnew.selector,50000);               
            },
            enterinputnew: function(input,inputText){
                //var select = format(this.elements.input.selector,{INPUT:input});
                //this.api.useXpath();
                this.api.useCss();
                action.setValue(this,this.elements.inputnew.selector,inputText);
            },
            waitForInputnew1: function(){               
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.inputnew1.selector,50000);               
            },
            enterinputnew1: function(input,inputText){
                //var select = format(this.elements.input.selector,{INPUT:input});
                //this.api.useXpath();
                this.api.useCss();
                action.setValue(this,this.elements.inputnew1.selector,inputText);
            },
            waitForInputnew2: function(){               
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.inputnew2.selector,50000);               
            },
            enterinputnew2: function(input,inputText){
                //var select = format(this.elements.input.selector,{INPUT:input});
                //this.api.useXpath();
                this.api.useCss();
                action.setValue(this,this.elements.inputnew2.selector,inputText);
            },
            clickcheck: function(){
                action.click(this,'@checkbutton');
            },
            waitcheck: function(){
                action.waitForElementVisible(this,'@checkbutton',50000);
            },
           
            waitnext: function(){
                action.waitForElementVisible(this,'@nextbutton',50000);
            },
            clicknext: function(){
                action.click(this,'@nextbutton');
            },
            waitradio: function(){
                this.api.useXpath();
                action.waitForElementVisible(this,this.elements.radiobutton.selector,50000);
            },
            selectradio: function(){
                this.api.useXpath();
                action.click(this,this.elements.radiobutton.selector,50000);
            },
            waitradio2: function(){
                this.api.useXpath();
                action.waitForElementVisible(this,this.elements.radiobutton2.selector,50000);
            },
            selectradio2: function(){
                this.api.useXpath();
                action.click(this,this.elements.radiobutton2.selector,50000);
            },
            waitsubmit: function(){
                action.waitForElementVisible(this,'@submit',50000);
            },
            clicksubmit: function(){
                action.click(this,'@submit');
            },
            waitnextact: function(){
                action.waitForElementVisible(this,'@nextact',50000);
            },
            clicknextact: function(){
                action.click(this,'@nextact');
            },
            waitscore: function(scorablename){
                var select3 = format(this.elements.score.selector,{SCORABLEACT:scorablename});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);

            },
            checkscore: function(callback,scorablename){
                var select3 = format(this.elements.score.selector,{SCORABLEACT:scorablename});
                this.api.useXpath();
                action.getElementText(this,select3,callback);

            },
            waitstar: function(scorablename){
                var select3 = format(this.elements.star.selector,{ACTIVITYTYPE:scorablename});
                this.api.useXpath();
                action.waitForElementVisible(this,select3,50000);

            },
            opennonscore: function(nonscor){
                var select3 = format(this.elements.nonscorableact.selector,{NONSCORE:nonscor});
                this.api.useXpath();
                action.click(this,select3);
            },
            waitnextdisappear: function(){
                action.waitForElementNotVisible(this,'@nextact',50000);
            },
            openNonScorable: function(nonscorableactivity){
                action.click(this,'@lesson4');
                
                var select = format(this.elements.nonScorable.selector,{NONSCORABLE:nonscorableactivity});
                this.api.useXpath();
               
                action.waitForElementVisible(this,select,25000);
                action.click(this,select);
            },
            waitForTocDropdownToAppear: function(){
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.tocDropdown.selector,60000);
            },
            clickTocDropdown: function(){
                this.api.useCss();
                action.click(this,this.elements.tocDropdown.selector);
            },
            waitForActivityCompletedScreen: function(){
                this.api.useCss();
                action.waitForElementVisible(this,this.elements.activityCompletedImage.selector,10000);
            },
            waitbignext: function(){
                action.waitForElementVisible(this,'@bignext',50000);
            },
            clicknextbig: function(){
                this.api.useCss();
                action.click(this,this.elements.bignext.selector);          
            }
        }
    ]
};

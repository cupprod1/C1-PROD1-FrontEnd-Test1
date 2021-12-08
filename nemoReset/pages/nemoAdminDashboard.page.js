var actions = require("./../lib/browserAction.js");
require("./../lib/logging.js");
var format = require("string-template");

module.exports = {
    elements: {
        tabsContainer:{
            selector:'li.nav-item'
        }
    },
    commands: [
        {
            waitForTabs:function(){
                this.api.perform(function() {
                    testlog.info("Waiting for Admin Tabs to be present")
                })
                this.api.useCss();
                this.api.waitForElementVisible(this.elements.tabsContainer.selector,50000,"Admin Tabs are not present");
                this.api.perform(function() {
                    testlog.info("Admin Tabs are visible")
                })
            }
        }
    ]
};
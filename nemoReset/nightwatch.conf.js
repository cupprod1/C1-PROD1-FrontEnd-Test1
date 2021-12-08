
//var seleniumServer = require('selenium-server');
var path = require('path');
var chromedriver = require('chromedriver');
module.exports = {

    selenium : {
        start_process : true,
        log_path :'' ,
        host : '127.0.0.1',
        port : 5554,
        cli_args : {
          //  'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
          'webdriver.chrome.driver': chromedriver.path
        }
    },

    test_settings : {
        default : {
            selenium_host : '127.0.0.1',
            selenium_port : 5554,
            end_session_on_fail: true,
            screenshots : {
                enabled : true,
                on_failure : true,
                on_error : true,
                path : './screenshots'
            },
            desiredCapabilities : {       // specify browser name along with other capabilities
                browserName : 'chrome',
                javascriptEnabled : true,
                acceptSslCerts : true,
                  chromeOptions: {
                    args: [ 'start-maximized']  }
            } ,
        test_runner : {
            type : 'mocha',
            options : {
                ui : 'bdd',
                reporter : 'mochawesome',
                reporterOptions: {
                    reportName: 'index',
                    reportDir: 'reports'
                }
            }
        }
    },
    smokeTestHeadless : {
        selenium_host : '127.0.0.1',
        selenium_port : 5554,
        end_session_on_fail: false,
        screenshots : {
            enabled : true,
            on_failure : false,
            path : 'screenshots'
        },
        desiredCapabilities : {       // specify browser name along with other capabilities
            browserName : 'chrome',
            javascriptEnabled : true,
            acceptSslCerts : true,
              chromeOptions: {
      args: [ 'headless']  }
        } ,
    test_runner : {
        type : 'mocha',
        options : {
            ui : 'bdd',
            reporter : 'mochawesome',
            reporterOptions: {
                reportName: 'index',
                reportDir: 'reports'
            }
        }
    }
},
    saucelabs : {
            selenium_host : 'ondemand.saucelabs.com',
            selenium_port : 80,
            end_session_on_fail: false,
            username : 'saucelabs_username',
            access_key : 'saucelabs_accesskey',
            screenshots : {
                enabled : true,
                on_failure : false,
                path : 'screenshots'
            },
            desiredCapabilities: { // specify browser name along with other capabilities
                name: 'SmokeTest',
                browserName : 'chrome',
                //version: "31",
                javascriptEnabled : true,
                acceptSslCerts : true,
                platform: 'Win7',
                "screen-resolution": '1920x1200'
            },
            test_runner : {
                type : 'mocha',
                options : {
                    ui : 'bdd',
                    reporter : 'mochawesome',
                    reporterOptions: {
                        reportName: 'index',
                        reportDir: 'reports'
                    }
                }
            }
        }
    }
};

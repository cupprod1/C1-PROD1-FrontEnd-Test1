'use strict';

//Load external npm modules
var bunyan = require('bunyan');
var bformat = require('bunyan-format');

//Configure logging format
var formatOut = bformat({
    outputMode: 'short'
});

//Create global testlog object.
global.testlog = bunyan.createLogger({
    name: ' ',
    stream: formatOut,
    level: 'info'
});

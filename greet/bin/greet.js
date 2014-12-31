#! /usr/bin/env node

var greet = require('../');
var argv = require('minimist')(process.argv.slice(2));

// console.dir(argv);

console.log(greet(argv._[0], argv.drunk));

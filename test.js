'use strict';

const Mocha = require('mocha');

const testRunner = new Mocha({
  ui: 'bdd', 
  reporter: 'spec',
  bail: false,
  timeout: 10000,
  slow: 2000
});

testRunner.addFile('./problems/mainTest.js');
testRunner.run();
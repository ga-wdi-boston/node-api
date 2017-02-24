'use strict';

const heyYall = require('../lib/hey-yall.js');

const inFile = process.argv[2];

if (!inFile) {
  throw('Script requires one arguments, an input file');
}

heyYall(inFile);

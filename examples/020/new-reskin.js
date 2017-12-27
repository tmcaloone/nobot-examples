require('colors');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const readLineSync = require('readline-sync');
const fs = require('fs-extra');
const open = require('opn');


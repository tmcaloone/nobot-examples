#!/usr/bin/env node

const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Thomas&myAge=22&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${parsedUrl.myName}`);
console.log(`I am ${parsedUrl.myAge}`);
console.log(`Oh and... ${parsedUrl.comment}`);

#!/usr/bin/env node

var cmdr  = require('commander');

cmdr.version('0.0.1')
    .usage('<keywords>')
    .parse();

var hostName = "http://sandbox.eevernote.com";
var options  = {
	consumerKey:,
	consumerSecret:,
	callbackUrl:,
	signatureMethod: "HMAC-SHA1"
};
var oauth = OAuth(options);
oauth.request({'method': 'GET', 'url':hostName + '/oauth', 'success': success, 'failure': failure});
console.log(success);

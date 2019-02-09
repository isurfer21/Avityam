#!/usr/bin/env node

const https = require('https'),
    fs = require('fs'),
    path = require('path'),
    minimist = require('minimist'),
    express = require('express');

console.log(`Avityam webserver (Version 1.0)
Copyright (c) 2019 Abhishek Kumar.
Licensed under the MIT License.
`);

var argv = minimist(process.argv.slice(2));
// console.dir(argv);

var parseArgv = function(shortArg, longArg, typeArg, defaultVal) {
    let argVal;
    if (!!argv[shortArg] && typeof argv[shortArg] == typeArg) {
        argVal = argv[shortArg];
    } else if (!!argv[longArg] && typeof argv[longArg] == typeArg) {
        argVal = argv[longArg];
    } else {
        argVal = defaultVal;
    }
    return argVal;
};

var help = parseArgv('help', 'h', 'boolean', false),
    host = parseArgv('host', 'u', 'string', '127.0.0.1'),
    port = parseArgv('port', 'p', 'number', '8080'),
    docpath = parseArgv('docpath', 'd', 'string', __dirname),
    key = parseArgv('key', 'k', 'string', ''),
    cert = parseArgv('cert', 'c', 'string', '');

if (help) {
    console.log(`Options:
  -h, --help               display help information
  -u, --host[=127.0.0.1]   set host IP or server address
  -p, --port[=8080]        set custom port number
  -d, --docpath            set document directory's path
  -k, --key                set SSL key's path
  -c, --cert               set SSL certificate's path
    `);
} else {
    var app = express();
    console.log('Server root is', docpath);
    if (!!key && !!cert) {
        if (fs.existsSync(key)) {
            if (fs.existsSync(cert)) {
                let options = {
                    key: fs.readFileSync(key),
                    cert: fs.readFileSync(cert)
                };
                console.log('Using SSL, \n Key at ' + key + '\n Certificate at ' + cert);
                https.createServer(options, app).listen(port);
                app.use('/', express.static(docpath));
                console.log('Listening at https://' + host + ':' + port);
            } else {
                console.log('Invalid "cert" file path!');
            }
        } else {
            console.log('Invalid "key" file path!');
        }
    } else {
        app.use('/', express.static(docpath));
        app.listen(port, host, () => console.log('Server listening at http://' + host + ':' + port));
    }
}
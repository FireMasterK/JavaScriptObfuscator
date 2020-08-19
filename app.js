const express = require('express');

const app = express();
const bodyParser = require('body-parser');

var JavaScriptObfuscator = require('javascript-obfuscator');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to JavaScript Obfuscator");
});

app.post('/obfuscate', (req, res) => {
    var obfuscationResult = JavaScriptObfuscator.obfuscate(
        req.body.code,
        {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.8,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: true,
            disableConsoleOutput: true,
            domainLock: req.body.domains,
            identifierNamesGenerator: 'hexadecimal',
            identifiersDictionary: [],
            identifiersPrefix: '',
            inputFileName: '',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            reservedNames: [],
            reservedStrings: [],
            rotateStringArray: true,
            selfDefending: true,
            shuffleStringArray: true,
            simplify: true,
            sourceMap: false,
            sourceMapBaseUrl: '',
            sourceMapFileName: '',
            sourceMapMode: 'separate',
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayEncoding: 'base64',
            stringArrayThreshold: 0.75,
            target: 'browser-no-eval',
            transformObjectKeys: true,
            unicodeEscapeSequence: true
        }
    );

    var code = obfuscationResult.obfuscatedCode;

    res.send(code);
});

module.exports = app;

"use strict";
exports.__esModule = true;
var postman_collection_1 = require("postman-collection");
const fs = require('fs'); 
var codegen = require('postman-code-generators');
var fs_1 = require("fs");
var commander = require("commander");

// node main.js -c postman_collection.json -l php,curl -l Objective-C,NSURLSession -l java,okhttp -l csharp,httpclient -l r,httr -l ruby,Net::HTTP

var languageVariantPairs = [
    'ruby,Net::HTTP',
    'r,httr',
    'C#,RestSharp',
    'csharp,HttpClient',
    'Dart,http',
    'cURL,cURL',
    'Go,Native',
    'HTTP,HTTP',
    'Java,OkHttp',
    'Java,Unirest',
    'JavaScript,Fetch',
    'JavaScript,jQuery',
    'JavaScript,XHR',
    'NodeJs,Native',
    'NodeJs,Request',
    'NodeJs,Unirest',
    'Objective-C,NSURLSession',
    'OCaml,Cohttp',
    'PHP,cURL',
    'PHP,pecl_http',
    'PHP,HTTP_Request2',
    'PowerShell,RestMethod',
    'Python,http.client',
    'Python,Requests',
    'Ruby,Net:HTTP',
    'Shell,Httpie',
    'Shell,wget',
    'Swift,URLSession'
].map(function (v) { return v.toLowerCase(); });

function parseTuples(value, previous) {
    // If previous is undefined, start with an empty array
    previous = previous || [];

    // If value is an array, process each item
    if (Array.isArray(value)) {
        value.forEach(function(v) {
            var lowerV = v.trim().toLowerCase();
            if (!languageVariantPairs.includes(lowerV)) {
                throw new Error("Not a valid <language,variant> pair: " + lowerV + ". Try one of:\n" + languageVariantPairs.join('\n') + "\n");
            }
            var tuple = lowerV.split(',');
            previous.push({ language: tuple[0], variant: tuple[1] });
        });
    } else {
        // If it's a single value
        var lowerV = value.trim().toLowerCase();
        if (!languageVariantPairs.includes(lowerV)) {
            throw new Error("Not a valid <language,variant> pair: " + lowerV + ". Try one of:\n" + languageVariantPairs.join('\n') + "\n");
        }
        var tuple = lowerV.split(',');
        previous.push({ language: tuple[0], variant: tuple[1] });
    }

    return previous;
}

var program = new commander.Command('generate');
program.version('0.3');
program
    .requiredOption('-c, --collection <path>', 'Path to the Postman 2.1 Collection JSON')
    .option('-l,--language_variant [tuples...]', 'Language,Variant pairs to output', parseTuples, [{ language: 'curl', variant: 'curl' }])
    .option('-e,--envvars <path>', "Path to environment variables exported from Postman")
    .option('-d, --debug', 'Output additional debugging info');

program.parse(process.argv);

function debugPrint(message) {
    if (program.opts().debug) {
        console.log('DEBUG:', message);
    }
}

debugPrint(program.opts());

var collectionPath = program.opts().collection;
var collection = new postman_collection_1.Collection(JSON.parse((0, fs_1.readFileSync)(collectionPath).toString()));
debugPrint(collection);

var options = {
    trimRequestBody: true,
    followRedirect: true
};

function isItem(itemG) {
    return itemG.request !== undefined;
}

function isItemGroup(itemG) {
    return itemG.items !== undefined;
}

var allSnippets = {}

function getTitle(lang) {
    if (lang === 'curl') {
        return 'cURL'
    } else if (lang === 'csharp') {
        return 'C#'
    } else if (lang === 'java') {
        return 'Java'
    } else if (lang === 'php') {
        return 'PHP'
    } else if (lang === 'ruby') {
        return 'Ruby'
    } else if (lang === 'r') {
        return 'R'
    } else if (lang === 'objective-c') {
        return 'Object-C'
    }
}

function generateSnippets(item, languageVariantPairs, environmentVariables) {
    if (isItem(item)) {
        // Generate snippet for each language/variant
        languageVariantPairs.forEach(function(lvp) {
            codegen.convert(lvp.language, lvp.variant, item.request, options, function (error, snippet) {
                if (error) {
                    console.error('Error generating code for request in ' + lvp.language + '/' + lvp.variant + ':', item.request, error);
                    return;
                }
                
                // Replace escaped newlines with actual newlines
                var processedSnippet = collection.variables.replace(snippet, environmentVariables)
                    .replace(/\\n/g, '\n')
                    .replace(/\\"/g, '"');
                
                var completeSnippet = {
                    code: processedSnippet,
                    'lang': lvp.language,
                    'title': getTitle(lvp.language)
                }
                
                var re = /(?:\{\{(.+?)\}\})/g;
                var matches = re.exec(completeSnippet.snippet);
                if (matches && matches.length > 0) {
                    matches.forEach(function (m) { return console.warn(m + " : Variable not provided"); });
                }
                
                var strippedRequestName = item.name.replace(/\s/g, '');
                if (allSnippets[strippedRequestName]) {
                    allSnippets[strippedRequestName].push(completeSnippet)
                }
                else {
                    allSnippets[strippedRequestName] = [completeSnippet]
                }
            });
        });
    }
    else if (isItemGroup(item)) {
        item.items.all().forEach(function(itemChild) {
            generateSnippets(itemChild, languageVariantPairs, environmentVariables);
        });
    }
}

var environmentVariables = new postman_collection_1.VariableList(new postman_collection_1.Property({ name: 'environmentVariables' }), []);

if (program.opts().envvars) {
    var environment = JSON.parse((0, fs_1.readFileSync)(program.opts().envvars).toString());
    debugPrint(environment);
    environment['values'].forEach(function (v) {
        environmentVariables.append(new postman_collection_1.Variable(v));
    });
}

var languageVariantPairsOpts = program.opts().language_variant;
debugPrint(environmentVariables);

// Generate snippets for all collection items
collection.items.all().forEach(function(item) {
    generateSnippets(item, languageVariantPairsOpts, environmentVariables);
});

// Custom JSON stringify function to use backticks for snippets
function customStringify(obj) {
    return JSON.stringify(obj, null, 2).replace(/"code": "(.*?)"/gs, function (match, p1) {
        // Decode escaped characters, preserve line breaks, and wrap the entire value in backticks
        const unescaped = p1
            .replace(/\\"/g, '"') // Unescape double quotes
            .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
            .replace(/\\\\/g, '\\'); // Unescape backslashes
        console.log(`"code": \`${unescaped}\``)
        return `"code": \`${unescaped}\``; // Wrap in backticks
    });
}

function saveAsPlainJsFile(variableName, data, filePath) {
    // Construct the JavaScript variable definition as a string
    const fileContent = `const ${variableName} = ${formatJsObject(data)};\n\nexport default ${variableName};`;

    // Write the content to the specified file
    fs.writeFile(filePath, fileContent, 'utf8', function (err) {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('JS file written successfully!');
        }
    });
}

// Helper function to format a JavaScript object
function formatJsObject(obj) {
    return inspect(obj, { depth: null, compact: false, sorted: true });
}

const { inspect } = require('util');

// Save allSnippets as a JS file
saveAsPlainJsFile('allSnippets', allSnippets, 'data.js');

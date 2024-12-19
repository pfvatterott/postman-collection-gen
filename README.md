# Generate Code Snippets for API Docs

This library was forked from [postman-collection-gen](https://github.com/arashout/postman-collection-gen). This library was a good starting off point for generating code snippets based off of our Postman collection but was missing a few key things:

* Support for generating multiple languages at once. Before, you had to pick just one language to generate code snippets for. Now, you can use one command (see step 4 below) to generate snippets for as many code variants as you want
* The library was also a little outdated in which code/variant types it supported based on what is provided by Postman. Fortunately this was just a dependency update as well as adding the code variants to `languageVariantPairs`
* The library was only set up to console.log the outputted code snippets. This version will save all the requests to a file `data.js` which also groups all code snippets to their respective request, such as `Create User`, `Add User to Organization`, etc.

## Steps to create code snippets

1. Go to Postman and the collection you want to export. Go to variables and make sure the **Initial Value** of each variable is set to `{API_KEY}`, for example.
2. Export the Postman collection and put it in this directory with the name `postman_collection.json`.
3. Run the `prepare_collection.js` script to generate a file called `prepared_postman_collection.json`

```bash
node prepare_collection.js
```

4. Run this script to create `data.js` that includes code snippets of each language

```bash
node main.js -c prepared_postman_collection.json -l php,curl -l Objective-C,NSURLSession -l java,okhttp -l csharp,httpclient -l r,httr -l ruby,Net::HTTP
```

5. Then run the `generate_tsx_snippets.js` script to generate tsx files for each request in the `./snippets` directory.

```bash
node generate_tsx_snippets.js
```


# Postman Gen
Just a small command line tool that's takes advantage of the [Postman SDK](https://github.com/postmanlabs/postman-collection) and [postman-code-gen](https://github.com/postmanlabs/postman-code-generators#postman-code-generators-) to create code snippets from Postman Collections (Exported from Postman).

For some reason this feature is missing in the actual client so I thought I would quickly make a tool that does what I want.

## Usage
### Help
```bash
> node main.js --help
Usage: generate [options]

Options:
  -V, --version                  output the version number
  -c, --collection <path>        Path to the Postman 2.1 Collection JSON
  -l,--language_variant <tuple>  Language,Variant pair to output (default: "cURL,cURL")
  -e,--envvars <path>            Path to environment variables exported from Postman. NOTE: Environment variables will not override variables provided in collection
  -d, --debug                    Output additional debugging info
  -h, --help                     output usage information
```
### Generate cURL code
- Export your Collection from Postman as JSON in the 2.1 format e.g. [`example_collection.json`](./example_collection.json)
- To generate `cURL` snippets:
```bash
node main.js -c example_collection.json
# Output:
# curl --location --request GET 'https://v7rr12wbr7.execute-api.us-west-2.amazonaws.com/prod/courses?c0=PHYS153&c1=APSC160&c2=CHEM154&c3=MATH100&c4=APSC150&c5=MATH101&c6=MATH152&c7=PHYS170&c8=ENGL112&c9=MATH253&c10=MECH226&c11=MATH255&c12=MECH220&c13=MECH221&c14=MECH224&c15=MECH222&c16=MECH223&c17=MECH225&c18=MECH375&c19=MECH368&c20=MECH360&c21=MECH328&c22=MECH326&c23=MECH325&c24=CIVL200&c25=EOSC114&c26=PHIL120&c27=MECH380&c28=MECH358&c29=MECH305&c30=LING101&c31=MATH307&version_key=1.2'
# curl --location --request GET 'https://v7rr12wbr7.execute-api.us-west-2.amazonaws.com/prod/courses?c0=PHYS153'
```
### Generate other languages

```bash
node main.js -c example_collection.json -d -l shell,httpie
node main.js -c example_collection.json -d -l Swift,URLSession
```
For a full list see:
https://github.com/postmanlabs/postman-code-generators#postman-code-generators-
### Import Environment Variables
You can also substitute variables from exported Evironment Variables from Postman (Note: That variables in the Collection JSON will take precedence)     
`node main.js -c example_collection.json --envvars environment.json`


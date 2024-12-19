# How to

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

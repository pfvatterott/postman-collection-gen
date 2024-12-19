// createSnippetFiles.js
import allSnippets from './data.js';
import fs from 'fs';
import path from 'path';

Object.keys(allSnippets).forEach(snippetTitle => {
  const additionalRequest = allSnippets[snippetTitle];
  
  // Generate the content for the new JS file
  const fileContent = `export const additionalRequests = ${JSON.stringify(additionalRequest, null, 2)};\n`;

  // Define the path where the new JS file will be created
  const filePath = `./snippets/${snippetTitle}.tsx`;
  
  // Create the JS file and write the content
  fs.writeFileSync(filePath, fileContent);

  console.log(`Created file: ${filePath}`);
});

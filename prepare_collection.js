import fs from 'fs';

// Function to recursively go through the JSON and replace "header": [] with the new header
function updateHeaders(obj) {
  if (typeof obj === 'string') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(updateHeaders);
  }

  if (typeof obj === 'object' && obj !== null) {
    // Check if the current object has the "header" property and its value is an empty array
    if (obj.hasOwnProperty('header') && Array.isArray(obj.header)) {
      obj.header.push({"key": "Authorization", "value": "Bearer {API_KEY}"})
    }

    // Recurse through all properties of the object
    for (const key in obj) {
      obj[key] = updateHeaders(obj[key]);
    }
    return obj;
  }

  return obj; // Return the object as is if it's neither a string, array, nor object
}

// Read the JSON file
fs.readFile('postman_collection.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON
  let jsonData = JSON.parse(data);

  // Replace all instances of "header": [] with the new header value
  jsonData = updateHeaders(jsonData);

  // Write the updated JSON back to the file
  fs.writeFile('prepared_postman_collection.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing the file:', err);
    } else {
      console.log('File updated successfully!');
    }
  });
});

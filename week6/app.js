const fs = require('fs');

const message = 'Hello, this is a message written using Node.js!';

// Write to a file (creates the file if it doesn’t exist)
fs.writeFile('output.txt', message, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');


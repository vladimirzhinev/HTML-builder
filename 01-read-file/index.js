const path = require('path');

const fs = require('fs');

const pathToFile = path.join(__dirname, 'text.txt');

fs.createReadStream(pathToFile).on('data', (chanks) => {
  console.log(chanks.toString());
});

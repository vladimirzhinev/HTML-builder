const fs = require('fs');
const path = require('path');
const pathToFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathToFolder, (err, items) => {

  if (err) throw err;

  items.forEach(it => {

    fs.stat(path.join(pathToFolder, it), (err, stat) => {

      if (err) throw err;

      if (stat.isFile()) {

        const str = it.split(('.')).join(' - ') + ' -';

        console.log(str, (stat.size / 1024).toFixed(3) + 'kb');

      }
    });
  });
});
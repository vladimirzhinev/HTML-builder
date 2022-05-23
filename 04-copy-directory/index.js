const fs = require('fs');
const path = require('path');
const firstPath = path.join(__dirname, 'files');
const secondPath = path.join(__dirname, 'files-copy');


fs.mkdir(secondPath, {

  recursive: true//повторная копия папки не приведет к ошибке

}, err => {

  if (err) throw err;

});

fs.readdir(secondPath, (err, files) => {

  if (err) throw err;

  files.forEach(it => {

    fs.unlink(`${secondPath}/${it}`, err => {

      if (err) throw err;

    });
  });
});

fs.readdir(firstPath, (err, files) => {

  if (err) throw err;

  files.forEach(it => {

    fs.copyFile(`${firstPath}/${it}`, `${secondPath}/${it}`, err => {

      if (err) throw err;

    });
  });
});

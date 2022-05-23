const fs = require('fs');
const path = require('path');

const pathToStyle = path.join(__dirname, 'styles');
const pathToProject = path.join(__dirname, 'project-dist');
const output = fs.createWriteStream(path.join(pathToProject, 'bundle.css'));

fs.readdir(pathToStyle, (err, files) => {

  if (err) throw err;

  files.forEach(it => {

    const extName = path.extname(it).split('.').pop();

    if (extName === 'css') {

      const input = fs.createReadStream(path.join(pathToStyle, it));
      input.on('data', data => {
        output.write(data.toString() + '\n');

      });
    }
  });
});
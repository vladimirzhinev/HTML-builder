const path = require('path');

const fs = require('fs');

const process = require('process');

const { stdin, stdout, exit } = process;

const pathToFile = path.join(__dirname, 'text.txt');

fs.writeFile(pathToFile, '', (err) => {
  if (err) throw err; //создаем файл
});

const writeStream = fs.createWriteStream(pathToFile);

stdout.write('Hello. You can write here.\n');

stdin.on('data', (data) => {
  (data.toString().trim() === 'exit') ? exit() : writeStream.write(data.toString());
});

process.on('SIGINT', () => {
  stdout.write(exit());

});

process.on('exit', () => stdout.write('Good bay. File saved.'));

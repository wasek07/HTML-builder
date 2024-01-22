const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'project-dist', 'bundle.css');
const dirPath = path.join(__dirname, 'styles');
const writeStream = fs.createWriteStream(filePath);
const fileMerge = file => {
  const extentionFile = path.parse(file).ext.slice(1);
  const pathFile = path.join(__dirname, 'styles', file);

  fs.stat(pathFile, (err, stats) => {
    if (err) {
      throw err;
    }

    if (!stats.isDirectory() && extentionFile === 'css') {
      const streaming = fs.createReadStream(pathFile);

      streaming.on('data', data => {
        const dataFile = Buffer.from(data);
        writeStream.write(dataFile.toString() + '\n');
      })
    }
  })
}

fs.readdir(dirPath, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach(fileMerge);
})
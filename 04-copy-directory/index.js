const path = require('path');
const fs = require('fs');
const fsProm = require('fs/promises');
let folderPath = path.join(__dirname, 'files');
let copyFolderPath = path.join(__dirname, 'files-copy');

async function folderCopy() {
  await fsProm.rm(copyFolderPath, { force: true, recursive: true }, err => { if(err) throw err });
  await fsProm.mkdir(copyFolderPath, err => { if(err) throw err });
  fs.readdir(folderPath, { withFileTypes: true }, (err, dir) => {
    if (err) throw err;
    dir.forEach( file => {
      if (file.isFile()) {
        fs.copyFile(path.join(folderPath, file.name), path.join(copyFolderPath, file.name), err => { if (err) throw err });
      }
    })
  })
}
folderCopy()
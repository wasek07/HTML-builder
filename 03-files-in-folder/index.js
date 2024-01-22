const path = require('path');
const fs = require('fs');
var readInfoPath = path.resolve(__dirname, './secret-folder');

fs.readdir(readInfoPath, {withFileTypes: true}, (err, data) => {
  if(err) {throw err}
  data.forEach(item =>{
    if(item.isFile()){
      var name = item.name.split('.') [0];
      var ext = item.name.split('.') [1];
      var dir = path.resolve(__dirname, `./secret-folder/${item.name}`);
      fs.stat(dir, (err, stats)=> {
        console.log('File info: ' + name + ' - '+ ext + ' - ' + stats.size +' B;');
      })
    }
  })
})
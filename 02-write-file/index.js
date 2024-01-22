const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text-message.txt'));

stdout.write('Hi! You have to enter text message HERE..:\n');

stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') process.exit();
  writeStream.write(chunk);
});
process.on('exit', () => stdout.write('\nBye! And see You later\n'));
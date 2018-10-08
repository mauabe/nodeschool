const fs = require('fs');
const filePath = process.argv[2];
let file = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .length - 1;
console.log(file);

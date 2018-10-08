const fs = require('fs');
const filePath = process.argv[2];

const asyncFile = fs.readFile(filePath, 'utf8', function (error, data){
  if(error) {return console.error(error)}
  else return console.log(data.split('\n').length-1)
});

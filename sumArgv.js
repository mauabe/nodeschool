// console.log(process.argv);
let arr = process.argv;
const sumArgv =  function (arr){
  let result = 0;
  for(let i = 2; i < arr.length; i++){
    result += Number(arr[i])
  }
  return result;
}


// let arr2 = ['node', 'file', 1, '2', '3'];
console.log(sumArgv (arr))

const entry = require("fs").readFileSync("day3data.txt", 'utf8');

const validOperations = entry.match(/mul\(\d{1,3}\,\d{1,3}\)/g);

let total = 0;
validOperations.forEach((op) => {
  console.log(op);
  const data = op.replace('mul(', '').replace(')', '').split(',');
  total += parseFloat(data[0]) * parseFloat(data[1])
})

console.log(total, validOperations.length)
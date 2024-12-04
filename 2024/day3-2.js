const entry = require("fs").readFileSync("day3data.txt", 'utf8');
// const entry = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
const validOperations = entry.match(/mul\(\d{1,3}\,\d{1,3}\)|(do\(\))|(don't\(\))/g);

let total = 0;
let readOp = true;
validOperations.forEach((op) => {
  if (op === "don't()") {
    readOp = false;
  }
  else if (op === "do()") {
    readOp = true;
  } else {
    if (readOp) {
      const data = op.replace('mul(', '').replace(')', '').split(',');
      total += parseFloat(data[0]) * parseFloat(data[1])
    }
  }
})

console.log(total, validOperations.length)
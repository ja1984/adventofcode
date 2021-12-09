const rawInput = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`.split('\n');

const numbers = {
  0: 'abcefg',
  1: 'cf',
  2: 'acdef',
  3: 'acdfg',
  4: 'bcdf',
  5: 'abdfg',
  6: 'abdefg',
  7: 'acf',
  8: 'abcdefg',
  9: 'abcdfg',
}

const map = { };

const checkNumber = (input) => {
  if (input.length === 2) return 1;
  if (input.length === 4) return 4;
  if (input.length === 3) return 7;
  if (input.length === 7) return 8;
  let returnValue = -1;
  Object.keys(numbers).forEach((key) => {
    console.log(numbers[key], input)
    if(numbers[key] === input) {
      returnValue = parseInput(key);
    }
  })
  return returnValue;
}

const testRow = (input, index) => {
  input.forEach((inputRow) => {
    const data = inputRow.split(' | ');
    const testValues = data[0].split(' ');
    testValues.forEach((value) => {
      const fixedValue = value.split('').map(x => (map[x] || x)).join('');
      const number = checkNumber(fixedValue);
      console.log(number, value, fixedValue, '----------------');
      if (number !== -1) {
        value.split('').forEach((char, index) => {
          console.log(char, index, numbers[number][index]);
          // if(!map[char]) {
            map[char] = numbers[number][index];
          // }
        })
        console.log('after', value.split('').map(x => (map[x] || x)).join(''));
      }
    });
  });
  console.log('==================', index, '===================');
  if(index < 3) {
  // if(Object.keys(map).length < Object.keys(numbers).length) {
    testRow(input, index + 1);
  } else {
    return 'done';
  }
}


 const data = testRow(rawInput, 0);
 console.log(data);

// 9 6 0

//  CAGEdb
//  BCEBAF

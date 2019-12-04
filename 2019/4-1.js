const range = [153517,630395];
const valids = [];

const containsDouble = (input) => {
	if(input.includes(11)) return true;
	if(input.includes(22)) return true;
	if(input.includes(33)) return true;
	if(input.includes(44)) return true;
	if(input.includes(55)) return true;
	if(input.includes(66)) return true;
	if(input.includes(77)) return true;
	if(input.includes(88)) return true;
	if(input.includes(99)) return true;
	return false;
};

const isIncreasingDigits = (input) => {
	let lastDigit = 1;
	let isValid = true;
	for(let i = 0; i < input.length; i += 1) {
		const currentDigit = input.substring(i, (i+1));
		if(currentDigit < lastDigit) {
			isValid = false;
		}
		lastDigit = currentDigit;
	}
	return isValid;
};

for(let i = range[0]; i <= range[1]; i += 1) {
	if(isIncreasingDigits(i.toString()) && containsDouble(i.toString())) {
		valids.push(i);
	}
}


console.log(valids.length);

const range = [153517,630395];
const valids = [];

const containsDouble = (input) => {
	if(input.includes(11) && !input.includes(111) && !input.includes(11111)) return true;
	if(input.includes(22) && !input.includes(222) && !input.includes(22222)) return true;
	if(input.includes(33) && !input.includes(333) && !input.includes(33333)) return true;
	if(input.includes(44) && !input.includes(444) && !input.includes(44444)) return true;
	if(input.includes(55) && !input.includes(555) && !input.includes(55555)) return true;
	if(input.includes(66) && !input.includes(666) && !input.includes(66666)) return true;
	if(input.includes(77) && !input.includes(777) && !input.includes(77777)) return true;
	if(input.includes(88) && !input.includes(888) && !input.includes(88888)) return true;
	if(input.includes(99) && !input.includes(999) && !input.includes(99999)) return true;
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

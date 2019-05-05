function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let sum = 0;
	for (i = 0; i < array.length; i++){
		sum += array[i];
	}
	return sum;
}

function multiply (array) {
	//TODO: Check out array.reduce!
	return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	if (num === 0)
	{
		return 1
	}
	factorial = num;
	for (let i = 1; i < num; i++){
		factorial *= i;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}


function add(...nums) {
	return nums.reduce((accumulator, value) => accumulator + value, 0);
}

console.log(add(3, 4, 10, 0, 10)); // should log 7
console.log(add(9, 102)); // should log 111

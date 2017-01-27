const operations = {
	total: 0,
	// set: function(operand){
	// 	this.total = operand;
	// }, 
	set: (operand) => operations.total = operand,
	add: (operand) => operations.total += operand,
	multiply: (operand) => operations.total *= operand,
	negate: () => operations.total = -operations.total, 
	divide: (operand) => operations.total /= operand,
	run: (op, operand) => {
		if (op === 'add') operations.add(operand);
		else if(op === 'set') operations.set(operand);
		else if (op === 'multiply')operations.multiply(operand);
		else if (op === 'negate') operations.negate();
		else if (op === 'divide') operations.divide(operand);
	}
};

module.exports = operations;
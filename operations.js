const operations = {
	total: 0,
	set: function(operand){
		this.total = operand;
	}, 
	add: function(operand){
		this.total += operand;
	}, 
	multiply: function(operand){
		this.total *= operand;
	},
	negate: function(){
		this.total = -this.total;
	}, 
	divide: function(operand){
		this.total /= operand;
	},
	run: function(op, operand){
		if (op === 'add') this.add(operand);
		else if(op === 'set') this.set(operand);
		else if (op === 'multiply')this.multiply(operand);
		else if (op === 'negate') this.negate();
		else if (op === 'divide') this.divide(operand);
	}
};
	

module.exports = operations;
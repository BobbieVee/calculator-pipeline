const operations = require('./operations');
const Calculator = {
	pipeline: function(string){
		// Split different operations into array
		var operationsArr = string.split(/\s*\|\s*/);
		// Run each operation
		operationsArr.forEach(function(operation, index){
			//determine operator and operand
			var operationArr = (operation.split(' '));
			var op = operationArr[0];
			var operand = operationArr.slice(1).join() * 1;
			//run operation
			operations.run(op, operand);
			
		});
		return operations.total;
	}
}; 

module.exports = Calculator;
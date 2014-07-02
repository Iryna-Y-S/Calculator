function CalculatorController () {

    var	calculator = new Calculator(),
	
		operand1_el = $("#operand1"),
		operand2_el = $("#operand2"),
		result_el = $("#result"),
		
		timer_interval;
		
	$("#addition").on("click", add);
	$("#subtraction").on("click", subtract);
	$("#multiplication").on("click", multiply);
	$("#division").on("click", divide);
	
    function add () {
		calculator.add(operand1_el.val(), operand2_el.val(), showResponse);
	}
	
	function subtract () {
	    calculator.subtract(operand1_el.val(), operand2_el.val(), showResponse);
	}
	
	function multiply () {
	    calculator.multiply(operand1_el.val(), operand2_el.val(), showResponse);
	}
	
	function divide () {
	    calculator.divide(operand1_el.val(), operand2_el.val(), showResponse);
	}
		
	function showResponse (value) {
		result_el.val(value);
	}
	
    return this;	
}
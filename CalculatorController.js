function CalculatorController () {

    var	addition = document.getElementById("addition"),
        subtraction = document.getElementById("subtraction"),
		multiplication = document.getElementById("multiplication"),
		division = document.getElementById("division"),
		element1 = document.getElementById("operand1"),
		element2 = document.getElementById("operand2"),
		result_element = document.getElementById("result"),
		timer_interval,
		calculator = new Calculator();
		
	addition.addEventListener("click", add, false);
	subtraction.addEventListener("click", subtract, false);
	multiplication.addEventListener("click", multiply, false);
	division.addEventListener("click", divide, false);
	
	element1.addEventListener("keyup", isValid, false);
    element2.addEventListener("keyup", isValid, false);
	
    function add () {
		calculator.add(element1.value, element2.value, showResponse);
	}
	
	function subtract () {
	    calculator.subtract(element1.value, element2.value, showResponse);
	}
	
	function multiply () {
	    calculator.multiply(element1.value, element2.value, showResponse);
	}
	
	function divide () {
	    calculator.divide(element1.value, element2.value, showResponse);
	}
		
	function showResponse (value) {
		result_element.value = value;
	}
			
	function isValid (event) {
	
	    var value = event.target.value,
	        not_valid = /[a-zA-Z]/;
			
	    if (not_valid.test(value)){
		    value = value.replace(not_valid, ''); 
			event.target.value = value;
		} 
    }
}
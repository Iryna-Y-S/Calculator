function Facade () {

    this.action = function (operand1, operand2, operation, showResponse) {
	    
		var method = "GET",
		
		    uri = {"add": "add.php?operand1="+operand1+"&operand2="+operand2,
		       "subtract": "sub.php?operand1="+operand1+"&operand2="+operand2,
			   "multiply": "mul.php?operand1="+operand1+"&operand2="+operand2,
			   "divide": "div.php?operand1="+operand1+"&operand2="+operand2
              };
		
        $.ajax ({
		    type: method,
	        url: uri[operation],
			success: showResponse
		});			
	};
	
	return this;	
}	
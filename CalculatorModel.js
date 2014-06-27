function Calculator() {

    var ajax = getAjax();
	
	function getAjax () {
	    if (window.XMLHttpRequest) {
	        ajax = new XMLHttpRequest();
	    } else {
	        ajax = new ActiveXObject("Microsoft.XMLHTTP");
	    }	
	    return ajax;
    }
	
    this.add = function (operand1, operand2, showResponse) {
	    ajax.onreadystatechange = function () {
		    if (ajax.readyState === 4 && ajax.status === 200) {
			    showResponse(ajax.responseText);			
	        }
		}	
	    ajax.open("GET", "add.php?operand1="+operand1+"&operand2="+operand2, true);
		ajax.send(null);
	};	
	
    this.subtract = function (operand1, operand2, showResponse) {
	    ajax.onreadystatechange = function () {
		    if (ajax.readyState === 4 && ajax.status === 200) {
			    showResponse(ajax.responseText);						
	        }
		}	
	    ajax.open("GET", "sub.php?operand1=" + operand1 + "&operand2=" + operand2, true);
		ajax.send(null);
    };		
	
	this.multiply = function (operand1, operand2, showResponse) {
	    ajax.onreadystatechange = function () {
		    if (ajax.readyState === 4 && ajax.status === 200) {
			    showResponse(ajax.responseText);						
	        }
		}	
	    ajax.open("GET", "mul.php?operand1=" + operand1 + "&operand2=" + operand2, true);		
		ajax.send(null);
	};	
	
	this.divide = function (operand1, operand2, showResponse) { 
	    ajax.onreadystatechange = function () {
		    if (ajax.readyState === 4 && ajax.status === 200) {
			    showResponse(ajax.responseText);						
	        }
		}	
	    ajax.open("GET", "div.php?operand1=" + operand1 + "&operand2=" + operand2, true);
	   	ajax.send(null);
	};	
    
	return this;	
}
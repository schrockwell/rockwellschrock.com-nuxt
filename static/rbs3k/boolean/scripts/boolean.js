
var operators = ["and", "or", "not", "none"];

var textColors = ["#000000", "#000000", "#000000", "#000000"]

function showOperator(operator) {
	
	var image, list;
	
	for (var i = 0; i < operators.length; i++) {
		image = document.getElementById(operators[i] + "Image");
		if (image) {
			image.style.display = "none";
			image.style.visibility = "hidden";
		}
		
		list = document.getElementById(operators[i] + "List");
		if (list) {
			list.setAttribute("class", "");
			list.setAttribute("className", "");
		}
	}
	
	image = document.getElementById(operator + "Image");
	if (image) {
		image.style.display = "inline";
		image.style.visibility = "visible";
	}

	list = document.getElementById(operator + "List");
	if (list) {
		list.setAttribute("class", operator + "Hover");
		list.setAttribute("className", operator + "Hover");
	}
	
}

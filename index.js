


var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("results");

});

function add(){
	// console.log("Let's add");
	// var math = ;
	results = +num1.value + +num2.value;
	res.value = results;
}

function subtract(){
	// console.log("Let's subtract")
	// var math = ;
	results = +num1.value - +num2.value;
	res.value = results;
}

function multiply(){
	// console.log("Let's multiply")
	results = +num1.value * +num2.value;
	res.value = results;
}

function divide(){
	// console.log("Let's divide")
	results = +num1.value / +num2.value;
	res.value = results;
}
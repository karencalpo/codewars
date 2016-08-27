var fib = function(n){
	if(n<0) {
		console.log("Please enter a number greater than 0");
		return;
	} else if(n===0 || n===1) {
		return 1;
	} else {
		return fib(n-1)*n;
	}
}

console.log(fib(10));
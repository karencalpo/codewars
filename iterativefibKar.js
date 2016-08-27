var iterativefib = function(n) {
	var f=1, a=0, b=1;

	for(i=1; i<=n; i++) {

		if(i<2) {
			//return 1;
			f=1;
			console.log(f + " ");
		} else {
			f=a+b;
			a=b;
			b=f;
			console.log(f + " ");
		}
	}
	return f;
	
}

console.log(iterativefib(10));
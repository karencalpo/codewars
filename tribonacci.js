var signature = [1,1,1];

var iterativeTri = function(signature, n) {
	var sum = 0; 

	for(var i=0; i<n-1; i++) {
		if(i>=2) {
			sum = signature[i] + signature[i-1] + signature[i-2];
			signature.push(sum);
		}
	}
	
	return signature.slice(0,n);
}

console.log(iterativeTri(signature, 4));
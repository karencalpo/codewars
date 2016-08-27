var arr = [20,37,20,21];
var x = 1;

function deleteNth(arr,x){
	var htab = {};

	return arr.filter(function(num){
		if(htab[num]){
			htab[num]++;
		} else {
			htab[num] = 1;
		}
		return htab[num] <= x;
	});

	return arr;
}

console.log(deleteNth(arr,x));
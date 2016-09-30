var arr1 = [1,2,3,4,3,2,1];
var arr2 = [1,100,50,-51,1,1];
var arr3 = [1,2,3,4,5,6];
var arr4 = [20,10,30,10,10,15,35];

function findEvenIndex(arr) {
	var i = 0;
	var j = arr.length-1;
	var pivot = 0;
	var left = 0;
	var right = 0;

	while(pivot !== arr.length){

		left = arr.slice(i,pivot+1).reduce(function(a,b){ return a+b; });
		right = arr.slice(pivot+1,j+1).reduce(function(a,b){ return a+b; });
		//left = arr.slice(i,pivot+1);
		//right = arr.slice(pivot,j+1);
		console.log("left:", left);
		console.log("right:", right);

		if(left === right){
			return pivot;
		}

	
		pivot++;
		//i++;
		//j--;
		left = 0;
		right = 0;
		
	}		

	return -1;
}

console.log(findEvenIndex(arr1));
//console.log(findEvenIndex(arr2));
//console.log(findEvenIndex(arr3));
//console.log(findEvenIndex(arr4));
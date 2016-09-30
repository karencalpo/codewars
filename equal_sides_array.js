/*
You are going to be given an array of integers. Your job is to 
take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers to the right 
of N. If there is no index that would make this happen, return -1.
*/

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

	while(pivot < arr.length){

		left = arr.slice(i,pivot+1).reduce(function(a,b){ return a+b; });
		right = arr.slice(pivot,j+1).reduce(function(a,b){ return a+b; });

		if(left === right){
			return pivot;
		}

		pivot++;
		left = 0;
		right = 0;
		
	}		

	return -1;
}

console.log(findEvenIndex(arr1));
console.log(findEvenIndex(arr2));
console.log(findEvenIndex(arr3));
console.log(findEvenIndex(arr4));
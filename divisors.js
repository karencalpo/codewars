/*
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum 
of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays, each subarray having two elements, first the number 
whose squared divisors is a square and then the sum of the squared divisors.
*/

var m = 1;
var n = 250;

function listSquared(m, n) {
    var num = undefined;
    var divisors_final = [];
    var sqd_sum = 0;

    for(var i = m; i <= n; i++){
    	for(var j = 1; j <= n; j++) {
    		if((i % j) === 0) {
    			if(num === undefined) {
    				num = i;
    				sqd_sum = sqd_sum + Math.pow(j,2);
    			} else {
    				sqd_sum = sqd_sum + Math.pow(j,2);
    			}
    		}

    	}

    	if(num !== undefined && Number.isInteger(Math.sqrt(sqd_sum))) {
    		divisors_final.push([num, sqd_sum]);
    	}

    	sqd_sum = 0;
    	num = undefined;
    	
    }

    return divisors_final;


}

console.log(listSquared(m, n));
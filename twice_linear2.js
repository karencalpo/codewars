/*
	Consider a sequence u where u is defined as follows:

	The number u(0) = 1 is the first one in u.
	For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
	There are no other numbers in u.
	Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

	1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 
	15 and 22 and so on...

	Task:

	Given parameter n the function dbl_linear (or dblLinear...) 
	returns the element u(n) of the ordered (with <) sequence u.

	Algorithm:
	1. Given a value of n, the array u will be a length of n numbers.
	2. The first number in u is ALWAYS 1.
	3. To populate U with numbers beyond 1, calculate y = 2 * (current y value in u) + 1, then z = 3 * (current z value in u) + 1 for
	the next number. Add numbers to U until n number of integers is reached.
	4. Return the last value of u.

*/

function dblLinear(n) {
    
    var a = 0, b = 0, c = 0, i = 0, u = [1], y , z;

    while(a + b < n + c) {
    	y = 2 * u[a] + 1;
    	z = 3 * u[b] + 1;

    	if(y < z) {
    		u.push(y);
    		a++;
    	} else if(y > z) {
    		u.push(z);
    		b++;
    	} else {
    		u.push(y);
    		a++;
    		b++;
    		c++;
    	}
    }
   
    return u[n];
}


console.log(dblLinear(10));
console.log(dblLinear(20));
console.log(dblLinear(30));
console.log(dblLinear(50));
console.log(dblLinear(100));

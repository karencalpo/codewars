var numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";

function highAndLow(numbers){
  // ...
  var numString = "";
  var num = numbers.split(" ").map(Number).sort(function(a,b) {
  	return a-b;"4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
  });

  return numString = numString + num[num.length-1] + " " + num[0];
}

console.log(highAndLow(numbers));	
/*
  1. Take string and determine if it has a number of even or odd characters.
  2. If even, create two separate substrings of even length divided in the middle,
     if odd, create an even length string on either side of the middle letter.
  3. Join both substrings in reverse order.
*/

var s = "yooshoo";
var s1 = "secret";
var s2 = "agent";

function reverseByCenter(s){
  
  var first_half, second_half, middle, middle_idx;
  var length = s.length;

  if(length % 2 === 0) {
    first_half = s.slice(0, (length/2));
    second_half = s.slice((length/2));
    return second_half+first_half;   
  } else {
  	first_half = s.slice(0, (length/2));
  	middle = s[parseInt((length/2))];
    second_half = s.slice((length/2)+1);
    return second_half + middle + first_half;  
  }

  return "Invalid string";
   
}

console.log(reverseByCenter(s));
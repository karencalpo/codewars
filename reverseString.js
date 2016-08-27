function reverse(string){
  var stringRev = string.split(" ");
  var newString = "";  

  for(var i = stringRev.length-1; i >= 0; i--){
    if(i !== 0) {	
    	newString = newString + stringRev[i] + " ";
    } else {
    	newString = newString + stringRev[i];
    }  
  }
  return newString;
}

//alternate solution
// function reverse(string){
//   return string.split(' ').reverse().join(' ');
// }

console.log(reverse("Hi There."));
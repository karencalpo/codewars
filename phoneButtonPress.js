function presses(phrase) {
  // To do...
  var count = 0;
  for(var i = 0; i < phrase.length; i++) {
    phrase[i] = phrase[i].toLowerCase();
    if(phrase[i].match(/[a-z0-9]/i)) {
      if(phrase[i] === "A" || phrase[i] === "D" || phrase[i] === "G" || 
phrase[i] === "J" || phrase[i] === "M" || phrase[i] === "P" || phrase[i] === "T" || 
phrase[i] === "W") {
        count = count + 1;
      } else if(phrase[i] === "B" || phrase[i] === "E" || phrase[i] === "H" || 
phrase[i] === "K" || phrase[i] === "N" || phrase[i] === "Q" || phrase[i] === "U" || 
phrase[i] === "X") {
        count = count + 2;
      } else if(phrase[i] === "C" || phrase[i] === "F" || phrase[i] === "I" || 
phrase[i] === "L" || phrase[i] === "O" || phrase[i] === "R" || phrase[i] === "V" || 
phrase[i] === "Y") {
        count = count + 3;
      } else if(phrase[i] === "S" || phrase[i] === "Z") {
       count = count + 4; 
      } 
    } else if(typeof phrase[i] === 'number' || phrase[i] === " ") {
      count = count + 1;  
    } 
  }

  return count;
}

console.log(presses("L  8TR  "));
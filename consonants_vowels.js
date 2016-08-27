function getCount(words) {
  
  var hashTab = {vowels:0,consonants:0};
  var regex=/^[0-9A-Za-z]+$/;
 
  if(typeof words !== 'string') {
    return hashTab;
  }
 
  
  for(var i = 0; i < words.length; i++){
    if(regex.test(words[i])) {
      if(words[i] === "a" || words[i] === "e" || words[i] === "i" 
      || words[i] === "o" || words[i] === "u" || words[i] === "A" 
      || words[i] === "E" || words[i] === "I" 
      || words[i] === "O" || words[i] === "U") {
        hashTab["vowels"]++;
      } else {
        hashTab["consonants"]++;
      }
    }
  }
  
  return hashTab;
  
}

console.log(getCount("Test*#(@*#(@"));
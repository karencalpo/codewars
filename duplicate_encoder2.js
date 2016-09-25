var word = "Supercalifragilisticexpialidocious";

function duplicateEncode(word){
    var hashChar = {};
    var word = word.toLowerCase();  
    var newWord = "" 

    for(var i = 0; i < word.length; i++){
      if(!hashChar[word[i]]) {
        hashChar[word[i]] = 1;
      } else {
        hashChar[word[i]]++;
      }
    }

    for(var j = 0; j < word.length; j++) {
      if(hashChar[word[j]] > 1) {
        newWord += ")";
      } else {      
        newWord += "(";
      }
    }
   
    return newWord;

}


console.log(duplicateEncode(word));
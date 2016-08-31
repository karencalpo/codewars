var words = "is2 Thi1s T4est 3a";
var words2 = "4of Fo1r pe6ople g3ood th5e the2";

//Less efficient function
function order1(words){
  var hashOrder = {"1":0, "2":1, "3":2, "4":3, "5":4, "6":5, "7":6, "8":7, "9":8};
  var wordsArr = words.split(" ");
  var arr = new Array(wordsArr.length);

  for(var i = 0; i < wordsArr.length; i++){
  	for(var j = 0; j < wordsArr[i].length; j++){
  		var ind = hashOrder[wordsArr[i][j]];
  		if(ind !== undefined){
  			arr[ind]=wordsArr[i];
  		}
  	}
  }

  return arr.join(" ");

}

//More efficient function
function order2(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  

console.log(order1(words));
console.log(order2(words2));
var l = [1,2,'aasf','1','123',123];

function filter_list(l) { 
  // Return a new array with the strings filtered out

  var arr = [];
  
  for(var i = 0; i < l.length; i++){
    if(typeof l[i] !== 'string'){
      arr.push(l[i]);
    }
  }

  return arr;
}
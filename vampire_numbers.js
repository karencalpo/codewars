var vampire_test = function(a, b){
  var concat = String(a) + String(b);
  var multi = String(a * b);

  concat = concat.split("").sort().join("")
  multi = multi.split("").sort().join("")

  return concat === multi;
}

console.log(vampire_test(-246,-510));
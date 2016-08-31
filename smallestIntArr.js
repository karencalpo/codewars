var args = [78,56,232,12,8];
var args2 = [1,56,232,12,8];

var SmallestIntegerFinder = function() {
  this.findSmallestInt = function(args) {
    return args.sort(function(a,b){return a-b})[0];    
  }
}

var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt(args2));
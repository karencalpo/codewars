// extend the Function object to include a wrap instance method
function locate(location) {
  return "My location is in " + location;
}

Function.prototype.wrap = function(func, prevLocation, currLocation) {
  var this2 = this;
  
  return function(prevLocation, currLocation){
    return func(this2, prevLocation, currLocation);
  };

}

locate = locate.wrap(function(func, prevLocation, currLocation){
  hereNow = func(currLocation);
  return hereNow + ", I used to live in " + prevLocation;
})

var hereNow = locate("Riverside", "San Jose");

console.log(hereNow);
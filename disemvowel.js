var str = "This website is for losers LOL!";

function disemvowel(str) {
    str = str.replace(/[aeiou]/ig,""); 
	return str;
}

console.log(disemvowel(str));
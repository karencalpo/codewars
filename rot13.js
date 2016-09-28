/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
Please note that using "encode" in Python is considered cheating.
*/

var message = "Test";
var regexp = /^[a-z0-9]+$/i;

function rot13(message) {
	var regexp = /^[a-z]+$/i;
	var message = message.split("");

	for(var i = 0;  i < message.length; i++){
		if(message[i].match(regexp)) {
			var num = message[i].charCodeAt();
			var newNum = num + 13;
			
			if(num >= 65 && num <= 90) {
				if(newNum > 90) {
					newNum = (newNum - 90) + 64;
				}
			} else if(num >= 97 && num <= 122) {
				if(newNum > 122){
					newNum = (newNum - 122) + 96
				}
			}

			message[i] = String.fromCharCode(newNum);
		}
	}

	return message.join("");
}

console.log(rot13(message));
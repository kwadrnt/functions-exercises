// TODO: add your solutions here!


// 1. Build your own concatenation

function combineStr(str1, str2) {
	result = str1 + str2
	return result
}
var result = combineStr('bull', 'dog');
console.log(result);
// displays 'bulldog'

// 2. Repeat a phrase
function repeatPhrase(phrase, n) {
	for (var i = 0; i < n; i++) {
		return phrase.repeat(n);
		console.log(phrase);
	}
}

repeatPhrase("Hello", 5);

// 3. Build your own Power Function
function toTheNthPower(number, power) {
	result = number**power;	
	return result;	
}

var result = toTheNthPower(4, 2);
console.log(result);
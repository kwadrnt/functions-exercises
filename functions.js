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
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}

repeatPhrase('Hello', 5);

// 3. Build your own Power Function
function toTheNthPower(number, power) {
	result = number**power;	
	return result;	
}

var result = toTheNthPower(4, 2);
console.log(result);

// 4. Area of a circle: π r2
function areaOfACircle(radius) {
	result = 3.14 * radius * radius;
	return result;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57

// 5. Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
	result = Math.sqrt(a*a + b*b);
	return result;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

// 6. Is X Evenly Divisible by Y ?
function isXEvenlyDivisibleByY(x, y) {
	result = x % y
	return result
	if (result === 0 ) {
		console.log(true);
	} else {
		console.log(false);
	}
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true

// 7. Vowel Count
function vowelCount(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.[i] === "a" || string.charAt[i] === "e" || string.charAt[i] === "i" || string.charAt[i] === "o" || string.charAt[i] === "u" || string.charAt[i] === "y") {
			counter++;
		}
	}
} 
var result = vowelCount("stealing");
console.log(result);


























let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// i is for finding vowels regarles of case sensitivity, and g is to find the vowels in the whole string (so it doesn't stop at the first match.

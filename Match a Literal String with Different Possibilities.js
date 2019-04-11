let petString = "Pet cat has a James.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(petRegex.test(petString)); //returns "true" if any of the petRegex elements is mentioned is the sentence. 


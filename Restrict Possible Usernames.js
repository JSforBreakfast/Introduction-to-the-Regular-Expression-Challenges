let username = "JackOfAllTrades";
let userCheck = /[a-z]{2,}[0-9]*$/i; // Change this line
let result = userCheck.test(username);

/*let username = "JackOfAllTrades";
let userCheck = /[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);*/

/*There's no need to matche the position just before the first character of the string, so I took out the ^ (caret). Also, just to experiment, I took out the \d (digits) to see if it would work, and it did. \w breaks the code if used to replace [a-z] 

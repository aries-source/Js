/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `topping`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 
 */
 
// change the values of `flavor`, `topping`, and `vessel` to test your code
const flavor = "chocolate";
const topping = "sprinkles";
const vessel = "bowl";

// your code goes here
if ((flavor ==="chocolate" || flavor ==="vanilla")&&		 (topping==="sprinkles"||topping==="peanut") &&(vessel ==="wafer cone"||vessel==="sugar cone")){
  	console.log("Great choice! Your ice cream is at the next window.")
}else{
  	console.log("Please check our menu and try again.")
}
const option = 3;
// The codes below are the same.
//If...else statement
if (option === 1) {
    console.log("You selected option 1.");
  } else if (option === 2) {
    console.log("You selected option 2.");
  } else if (option === 3) {
    console.log("You selected option 3.");
  } else if (option === 4) {
    console.log("You selected option 4.");
  } else if (option === 5) {
    console.log("You selected option 5.");
  } else if (option === 6) {
    console.log("You selected option 6.");
  }
// Switch statement
switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
    // in case none of the case match,then
  default:
    console.log("You did not select a valid option.");
}
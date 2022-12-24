/* Murder mystery quiz
Four people in a building, the building has four rooms
gallery, billiards,ballroom,dinner room.
Murder waepons are associated with rooms.
    gallery ==== trophy
    dinner room === knife

*/
/* 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output when the case is solved: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 */


/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

const room = "gallery";
const suspect = "Ms. Van Cleve"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "pool stick";
let solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (suspect ==='Mr. Parkes' && room ==='dinning room') {
    solved = true
} else if (suspect === 'Ms. Van Cleve' && room === 'gallery') {
    solved = true
} else if (suspect === 'Mrs. Sparr' && room === 'billiards room') {
    solved = true
} else if(suspect === 'Mr. Kalehoff' && room === 'ballroom'){
    solved = true
}else{
	solved = false
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect+' did it in the '+ room+' with the '+weapon+'!');
} else {
  console.log("The case is not solved!")
}
/* ****************************************** */

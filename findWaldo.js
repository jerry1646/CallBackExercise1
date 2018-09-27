// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Part 1
// Modify the callback function in the previous example so that logs the index of the array where Waldo is found,
// ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}


// Part 2
// Refactor the function findWaldo to use the forEach() method instead of a for loop.

function findWaldo(arr, found) {
  arr.forEach (function(person){
    if (person === "Waldo") {
      found(arr.indexOf(person));   // execute callback
    }
  })
}
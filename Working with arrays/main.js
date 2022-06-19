/* In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

 */

//Original Code

/* function withoutLast(arr) {
    // Fix it
    arr.pop()
    return arr // removes the last element
  } */

  //Refactored Code

  function withoutLast(arr) {
    return arr.slice(0, -1)
  }
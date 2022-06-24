/* Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee" */

function onlyDuplicates(str) {
    return str.split('')
              .filter((el) => str.indexOf(el) !== str.lastIndexOf(el))
              .join('')
}
/* DESCRIPTION:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

 */

function removeDuplicateWords(str) {
    const strToArray = str.split(' ')
    const removeDuplicates = new Set(strToArray)
    return [...removeDuplicates].join(' ')
}
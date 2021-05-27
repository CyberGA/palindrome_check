/**
 * A palindrome is a word or sentence that's spelt the same way both forward and backward,
 * ignoring punctuation, case and spacing
 *
 *
 * return true if an arg === to it reverse
 * turn the arg to lowercase
 * remove all whitespace and all non-alphanumeric char
 */

function palindrome(str) {
  //   let removedChar = /[\W" "_]/g;
  let removedChar = /[\W\s_]/g;
  str = str.toLowerCase().replace(removedChar, "");
  let reversedStr = str.split("").reverse().join("");
  if (reversedStr === str) return true;
  return false;
}

palindrome("joshua");

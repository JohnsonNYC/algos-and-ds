// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s1 and s2, write code to check is s2 is a rotation of s1 
// using only one call to isSubstring

// Example
// 'waterbottle' is a rotation of 'erbottlewat'

const isSubstring = function (string1, string2){
  if(string1.length !== string1.length) return false
  let duplicate = string1 + string1
  return duplicate.includes(string2)
}

console.log(isSubstring('waterbottle', 'erbottlewat'))
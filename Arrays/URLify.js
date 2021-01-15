// Write a method to replace all spaces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional 
// characters and that you are given the 'true' length of the string. 

//Example
// input: "Mr John Smith   ", 13
// Output: "Mr%20John%20Smith"

// Split into Array by spaces
  // [Mr,John,Smith]

// Create a string to append to 
  // result = ""
// For each word, append to string following with %20
// Add the %20 for as long as arr[i] isn't the last element 
function URLify(string){
  let stringArr = string.trim().split(" ");
  let result = ""
  let i = 0; 
  while(i < stringArr.length){
    if(i === stringArr.length - 1){
      result += stringArr[i]
    }else{
      result += stringArr[i] + '%20'
    }
    i++
  }

  return result
}

console.log(URLify('Mr John Smith     '))
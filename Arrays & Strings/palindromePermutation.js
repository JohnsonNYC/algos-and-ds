// Given a string, write a function to check if it s a permutation of a palindrome.
// A palindrome is a phrase that is the same forwards and backwards. 
// A permutation is a rearrangment of letters. 

function palindromePermuation(string){
  // create a store 
  // if the string is even, all values should be even 
  // if the string is odd, only one can have an odd count and everything else shold be even
  
  let trimmed = string.trim().split(" ").join("")

  let store = {};
  for(let char of trimmed){
    if(!store[char]){
      store[char] = 1;
    }else{
      store[char] = store[char] + 1; 
    }
  }

  if(trimmed.length % 2 === 0){ // For even number 
    for(let char in store){
      if(store[char] % 2 !== 0 ) return false
    }
    return true
  }else{ // For odd number
    let oddCounter = 0; // should only be one
    for(let char in store){
      if(store[char] % 2 !== 0){
        oddCounter++
      }
    }
    if(oddCounter > 1) return false
    return true
  }
}

console.log(palindromePermuation('tact boa'))
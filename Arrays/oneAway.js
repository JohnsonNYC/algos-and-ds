// There are three types of edits that can be performed on strings:
// insert, remove, or replace

// Given two strings, check if they are one edit or zero edits away from being the same

//Example
// pale, ple  => true
// pales, pale => true
// pale, bale => true
// pale bake => false

// if the string lengths are equal (replace)
  //create a store of first string with key {letter}, and value {count}
  // if second string letter dne in lookup
  // editCount ++
  // if editCount > 1; return false 
// if they are not equal (remove or add)
  // create a store with the largest string
  // if letters from smallest string exists as key in store and the differnce between the two is 1, return true


function oneAway(string1, string2){
  if(Math.abs(string1.length - string2.length) > 1) return false;
  let store1 = {};
  let store2 = {};

  for(let char of string1){
    if(!store1[char]){
      store1[char] = 1;
    }else{
      store1[char] += 1;
    }
  }
  // {p:1, a:1, l:1, e:1}
  for(let char of string2){
    if(!store2[char]){
      store2[char] = 1;
    }else{
      store2[char] += 1;
    }
  }
  // {d:1, a:1, l:1, e:1}

  if(string1.length === string2.length){
    let editCount = 0; 

    for(let char in store2){
      if(!store1[char]){
        editCount++
      }
    }

    if(editCount === 1) return true
    return false

  }else if(string1.length > string2.length){
    for(let char of string2){
      if(!store1[char]){
        return false
      }else{
        return true
      }
    }
  }else{
    for(let char of string1){
      if(!store2[char]){
        return false
      }else{
        return true
      }
    }
  }
}


console.log(oneAway('pale','bake'))
// Implement an algorithm to determine if  a string has all unqiue characters
// What if you cannot use additional data structures?

function isUnique(string){
  let lookUp = {};

  for(let i = 0; i < string.length; i++){
    if(!lookUp[string[i]]){
      lookUp[string[i]] = 1
    }else{
      lookUp[string[i]]++;
      console.log(false)
      return false
    }
  }
  console.log(true)
  return true
}

isUnique('Apple')
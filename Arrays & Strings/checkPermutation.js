// Given two srings, write a method to decide if one is a permutation of the other.

function checkPurmation(string1, string2){
  
  if(string1.length !== string2.length) return false;

  let sortedString1 = string1.split('').sort().join('');
  let sortedString2 = string2.split('').sort().join('');

  console.log(sortedString1 === sortedString2);
  return sortedString1 === sortedString2;
}


checkPurmation('ccba','abcc')


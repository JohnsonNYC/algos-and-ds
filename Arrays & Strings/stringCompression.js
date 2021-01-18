// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string 'aabcccccaaa' would become 
// 'a2b1c5a3'. If the compressed string would not become smaller than the original,
// your method should return the original string. 

function stringCompression(string){
  let i = 0; 
  let result = "";
  let count = 1

  while(i < string.length){
    if(string[i] === string[i+1]){
      count++
    }else{
      result += string[i]+count
      count = 1
    }
    i++ 
  }
  return string.length > result.length? result: string
}

console.log(stringCompression('aabcccccaaa'))

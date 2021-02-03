// Escape Room Keypad question 

// Given 
// Worlist : ['APPLE','PLEA','PLEASE'] // DICTIONARY OF VALID ENGLISH WORDS 
// Keypads : ['AELWXYZ','AELPXYZ','AELPSXY','SAELPRT','XAEBKSY']
// RESULT : [0,2,3,1,0]

let wordlist = ['APPLE','PLEA','PLEASE'];
let keypads =  ['AELWXYZ','AELPXYZ','AELPSXY','SAELPRT','XAEBKSY']

// function escapeRoom(wordlist, keypads){

// }

console.log(escapeRoom(wordlist,keypads))

let keyPadstore = new Set()
keyPadstore.add('A')
keyPadstore.add('E')
keyPadstore.add('L')
keyPadstore.add('W')
keyPadstore.add('X')
keyPadstore.add('Y')
keyPadstore.add('Z')

let wordlistStore = new Set()
wordlistStore.add('A')
wordlistStore.add('P')
wordlistStore.add('L')
wordlistStore.add('E')

let result = []
let sum = 0;
for(let char of keyPadstore){
  let counter = 0;
  if(wordlistStore.has(char)){
    counter++
  }
  if(counter == wordlistStore.size){
    sum++
  }
}
result.push(sum)
sum = 0;
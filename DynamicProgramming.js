

// console.log(fib(5))
// Given N [integer]
  // print Fizz for number divisible by 3
  // print Buzz for number div by 5
  // print FizzBuzz if div by both 3 and 5

function fizzBuzz(n){
  //FizzBuzzDazz
  for(let i = 0; i < n; i++){
    let result=""

    if(i%3===0){
      result += 'Fizz'
    }
    if(i%5===0){
      result +="Buzz"
    }

    if(i%2===0){
      result +='Dazz'
    }
    
    if(result === ""){
      console.log(i)
    }else{
      console.log(result)
    }
    
  }
}

console.log(fizzBuzz(20))
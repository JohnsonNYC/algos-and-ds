//You are given a list of integers nums.
// Consider any pair of indices i < j such that j - i > 1. 
// Return the smallest pair sum.

//nums = [2, 3, 1, 1, 3]
//output = 3

//We pick values 2 and 1 for total sum of 3. 
//Note that we can't pick 1 and 1 since it would violate the j - i > 1 constraint.

//PSEUDO
// J > i +1
// Keep track of 
  // 1. Minimum difference found so far
  // 2. Minimum Number visited so far

function smallestPairSum(array){
  let smallestNum = array[0];
  let sum = Infinity;

  for(let i = 2; i < array.length; i++){
    sum = Math.min(sum, array[i] + smallestNum)
    smallestNum = Math.min(array[i-1], smallestNum)
    console.log(i,smallestNum, sum)
  }

  return sum
}

console.log(smallestPairSum([2, 3, 1, 1, 3]))
//                           0  1  2  3  4

// i = 2
// sum = 1 + 2 = 3
// smallestNum = Math.min(array[2], smallestNum) = 2

// i = 3
// sum = Math.min(3, array[3] + smallestNum) = 3
// smallestNum  = 1

// i = 4
// sum = Math.min(3, array[4] + smallestNum) = 3
// smallestNum = 1
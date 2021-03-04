//Find the largest pair sum in an unsorted array
// Given an unsorted of distinct integers, find the largest pair sum in it.
// For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.
// [Only one traversal of array is allowed]

function maxSum(array){
  max_sum = array[1] + array[0];
  maximum_number = array[0];

  for(let i = 1; i < array.length; i++){
    if(array[i] + maximum_number > max_sum) max_sum = array[i] + maximum_number;
    if(array[i] > maximum_number) maximum_number = array[i]
    console.log(max_sum, maximum_number)
  }

  return max_sum
}

console.log(maxSum([12, 34, 10, 6, 40]))
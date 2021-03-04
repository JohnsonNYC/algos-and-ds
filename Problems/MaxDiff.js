// Maximum difference between two elements such that the larger
// element appears after the smaller element

//Ex: arr = [2, 3, 10, 6, 4, 8, 1]
// Output:  8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

function maxDiff(arr){
  // let maximumDifference = 0; 
  // for(let i = 0; i < arr.length; i++){
  //   for(let ii = i+1; ii < arr.length; ii++){
  //     maximumDifference = Math.max(arr[ii]- arr[i], maximumDifference)
  //   }
  // }
  // return maximumDifference

  let max_diff = arr[1] - arr[0];
  let smallest_num = arr[0]; 

  for(let i = 1; i < arr.length; i++){
    if(arr[i] - smallest_num > max_diff) max_diff = arr[i] - smallest_num;
    //max_diff = Math.max(max_diff, arr[i]-smallest_num)
    if(arr[i] < smallest_num) smallest_num = arr[i]
  }
  return max_diff
}
//                      |
console.log(maxDiff([7, 9, 5, 6, 3, 2]))
// max_diff =  9
// smallest_num  = 1         

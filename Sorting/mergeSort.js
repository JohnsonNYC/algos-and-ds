function merge(arr1, arr2){
  let result = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){ // completes up until the shortest array length
    if(arr1[i] < arr2[j]){
      result.push(arr1[i])
      i++
    }else {
      result.push(arr2[j])
      j++
    }
  }

  while( i < arr1.length){ // pushes the remaing elements
    result.push(arr1[i])
    i++
  }

  while( j < arr2.length){ // pushses the remaing elements 
    result.push(arr2[j])
    j++
  }
  console.log(result)
  return result
}

// merge([1,10,50],[2,14,99,100])

//Create an empty array, take a look at the smallest values of each input array
// While there are values we still haven't looked at 
    // If the value in the first array is smaller than the value of the second array
        // push the value in the first array into our result and move on to the next value 
        // in the first array 
    // if the value in the second array is smaller than the value of the first array
        // push the value in the first array into our result and moce on to the next value
        // in the second array
    // Once we exhaust one array, push the remaining elements from the second array 


function mergeSort(arr){
  if(arr.length === 1) return arr;

  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left,right)
}

mergeSort([10,24,76,73])
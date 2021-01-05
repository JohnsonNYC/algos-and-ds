function binarySearch(arr,val){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while(arr[middle] !== val && left <= right){
    if(val < arr[middle]){
      right = middle - 1
    }else {
      left = middle +1
    }
    middle = Math.round((left + right) / 2);
  }

  if(arr[middle] === val){
    console.log(middle)
    return middle
  }
    console.log(-1)
    return -1 
}

binarySearch([2,5,6,9,13,16,28,30], 50)       

// [2  ,5  ,6  ,9  ,13  ,15  ,28  ,30]
// l            m                    r
// [2  ,5  ,6  ,9  ,13  ,15  ,28  ,30]
//                   l    m          r
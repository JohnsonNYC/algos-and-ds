function binarySearch(arr,val){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while(arr[middle] !== val){
    if(val < arr[middle]){
      right = middle - 1
    }else {
      left = middle +1
    }
    middle = Math.round((left + right) / 2);
  }
  console.log('index',middle, 'val',arr[middle])
  return middle      
}

binarySearch([2,5,6,9,13,15,28,30], 15)       

// [2  ,5  ,6  ,9  ,13  ,15  ,28  ,30]
// l            m                    r
// [2  ,5  ,6  ,9  ,13  ,15  ,28  ,30]
//                   l    m          r
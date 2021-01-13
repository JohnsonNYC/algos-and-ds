function binarySearch(arr,val){
  let start = 0;
  let end = arr.length -1; 
  let middle = Math.floor((start+end)/2);

  while(arr[middle] !== val && start <= end){
    if(val < arr[middle]){
      end = middle - 1;
    }else{
      start = middle + 1;
    }
    middle = Math.floor((start + end)/2)
  }

  if(arr[middle] === val){
    console.log(arr[middle])
  }else{
    console.log(-1)
  }
}

binarySearch([2,4,6,8,10,12,14,16,18,20,22,24], 10)
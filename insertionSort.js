function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i -1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr, 'j',j, 'currentVal', currentVal)
        }
        arr[j+1] = currentVal         
    }
    return arr
}

insertionSort([2,1,9,76,4])

// while i = 1, arr[i] = 1
// j = 0
// start [2,1,9,76,4]
// [2,1,9,76,4]
// [2,2,9,76,4] arr[j+1] = arr[j]
// j = -1
// [1,2,9,76,4] arr[j+1] = currentVal
// 

// while i = 4, arr[4] = 4
// j = 3
// start [1,2,9,76,4]
// [1,2,9,76,76] arr[j+1] = arr[j]
// j = 2
// [1,2,9,4,76]
// [1,2,9,9,76] arr[j+1] = arr[j]
// j =1
// [1,2,9,9,76]
// [1,2,4,9,76] arr[j+1] = currentVal
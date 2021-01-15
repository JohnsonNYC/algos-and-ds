// Instructions 
// Given an array of non-negative integers representing the elevations from
// the vertical cross section of a range of hills, determine how many units of snow
// could be captured between the hills 
//                             ___
//         ___                |   |        ___
//        |   |        ___    |   |___    |   |
//     ___|   |    ___|   |   |   |   |   |   |
// ___|___|___|___|___|___|___|___|___|___|___|___
// {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3}

//                             ___
//         ___                |   |        ___
//        |   | *   *  _*_  * |   |_*_  * |   |
//     ___|   | *  _*_|   | * |   |   | * |   |
// ___|___|___|_*_|___|___|_*_|___|___|_*_|___|___
// {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3}
//      i   j

// if arr[i] < arr[j];
  // i = j
  // leftMax = arr[j]
  // j++
  // right Max = Math.max(arr[j], Max)
// if j < i

// if j === i

let heights = [0,1,3,0,1,2,0,4,2,0,1]

function computeSnowPack(heights = []){
  let i = 0;
  let j = 1;

  let leftMax = -1; //0
  let rightMax = -1;

  while (j < heights.length){
    if(heights[j] > heights[i]){
      leftMax = 
    }
  }
  console.log(j)
  return j
}

computeSnowPack(heights)

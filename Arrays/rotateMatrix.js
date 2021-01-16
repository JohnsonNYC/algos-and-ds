// Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Cna you do this in place
function rotateMatrix(matrix){
  //Step 1: Transpose    
  // 1  2  3      1  4  7     
  // 4  5  6  =>  2  5  8 => 
  // 7  8  9      3  6  9

  for(let i = 0; i < matrix.length; i++){
    for(let j = i; j <matrix.length; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp
    }
  }
  
  //Step 2: Flip Vertically 
  // 1  4  7      7  4  1 
  // 2  5  8 =>   8  5  2
  // 3  6  9      9  6  3
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length/2; j++){
      console.log('i',i,'j',j)
      let temp = matrix[i][j]; 
      matrix[i][j] = matrix[i][matrix.length -1 -j]; 
      matrix[i][matrix.length -1 -j] = temp;
    }
  }

  return matrix
}


console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))
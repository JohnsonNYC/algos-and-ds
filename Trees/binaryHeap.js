// Binary Heaps: Similar to binary search tree with different rules
// WHY DO WE NEED TO KNOW THIS?
  // Binary Heaps are used to implement Priority Queues which are commonly used data structures


// In a Max Binary Heap: parent nodes are always larger than child nodes
  // Each parent has at most two nodes
  // The value of each parent node is ALWAYS greater than it's child node 
  // In a max Binary Heap the parent is greater than the children, but there are no guarantee betweeen sibling nodes
  // A binary heap is as compact as possible meaning children nodes are as full as they can be starting from the left 
//          41
//      39      33
//    18  27  12


// In a Min Binary Heap: parent nodes are always smaller than child nodes 
// Representing a Heap as an Array/List
// Finding a child node to parent
//                          100
//               19                    36
//          17      12              25      5
//        9   15   6   11         13  8   1   4

// [100,19,36,17,12,25,5,9,15,6,11,13, 8, 1, 4]
//  0   1  2  3  4  5  6 7 8  9 10 11 12 13 14
// For any index in the array n....
// the left child is stored in 2n + 1
// the right child is stored in 2n + 2

// Finding a parent node to child
// For any child at index n..
// It's parent is at index (n-1)/2 floored



class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12]
  }
  // Insert function: Adding to Max Binary Heap 
  // Add to the end 
  // Bubble Up = swapping until it finds it's correct resting place 
  // Pseduo: Push the value into the heap 
  //         Bubble the value up to it's correct spot
  //            Create a variable called index which is the length of the values property - 1
  //            Create a variable called parent index which is the floor of (n-1)/2 
  //            Keep Looping as long as the values element at the parentIndex is less than the values element at the child index /
  //              Swap the values of the values element at the parent index with the value of the element property at the child index 
  //              Set the index to be parentindex and start over

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];

    while(index > 0){
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.values[parentIdx];
      if(element <= parent) break;
  
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55)
heap.insert(1)
console.log(heap)
// [41,39,33,18,27,12,55]
// [55,39,33,18,27,12,55]

// Binary Trees: Can have values of any type but at most two children for each parent
// Binary Search Trees: A specific version of binary trees where every node to the left of the parent is
//                      less than it's value and every node to the right is greater 

    // When to use Breadth First Search V Depth First Search
    // Deponds on the true.
    // Breadth FIrst on a wide tree is bigger in space complexity

class Node {
  constructor(value){
    this.value =  value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  // INSERT
  //  create node
  //  start at the root
  //    if there is a root, check if the value of the new node is greater or less than root
  //      - if greater, check to see if a node is the right 
  //        - if there is, move to node an repeat the steps
  //        - if there isn't, add to right property
  //      - if less, check to see if a  node exists in the left 
  //        - if there is, move to node an repeat steps
  //        - if there isn't, add to the left 
  insert(val){
    let newNode = new Node(val);
    if(this.root ===  null){
      this.root = newNode
      return this
    }else{
      let current = this.root
      while(true){
        if(val === current.value)return undefined
        //Left Side
        if(val < current.value ){
          if(current.left === null){
            current.left = newNode
            return this
          }else{
            current = current.left
          }
        // Right Side
        }else if(val > current.value){
          if(current.right === null){
            current.right = newNode;
            return this;
          }else{
            current = current.right
          }
        }
      }
    }
  }


  find(val){
    if(this.root === null){
      console.log(false)
      return false
    }

    let current = this.root,
    found = false

    while(current && !found){
      if(val < current.value){ // if value is smaller
        current = current.left
      }else if(val > current.value){ //if value is bigger
        current = current.right
      }else{ // if value is equal
        found = true
      }
    }
    if(!found) return false;
    return current
  }
  // Breath First Search
  // Working Horizontaly 
  // - Create a queue (first in first out structure) and a variable to store values of node
  // - Place root node in the queue 
  // - Loop as long as there is anything in the queue 
    // - Dequeue a node from the queue and push the value into store
    // - If there is a left property on the node dequeued - add it to the queue 
    // - If there  is a right property on the node dequeued - add it to the queue
  //            10
  //        6       15
  //      3   8         20
  // queue: [10] => [6,15] => [15,3,8] => [3,8,20] => []
  // visited: [] => [10] => [10,6] => [10,6,15] => [10,6,15,3,8,20]

  BFS(){
    var data = [], queue = [], node = this.root;
    
    queue.push(node)
    while(queue.length){
      node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    console.log(data) // added to see in terminal 
    return data 
  }

  // Depth First Search - PreOrder - Visits current node before child nodes 
  // Working Vertically 
  // - Create a variable to store the values of the node visited 
  // - Store the root of the BST in a variable called current
  // - Write a helper function which accepts a node 
  //  - Push the value of the node to variable that stores the values
  //  - If the node has a left property, call the helper function with the left property on the node 
  //  - If the node has a right property,call the helper function with the right property on the node
  // - Invoke the helper function with the current variable 
  // - Return the array of values
  //            10
  //        6       15
  //      3   8         20
  // [10,6,3,8,15,20]
  DFSPreOrder(){
    var data = [], current = this.root

    function traverse(node){
      data.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    console.log(data)
    return data
  }

  // DFS - Post Order - Visits the current node after its child nodes
  //       10
  //   6       15
  // 3   8         20
  // [3,8,6,20,15,10]
  // Create a variable to store the values of the nodes visited
  // Store the root of the BST in a variable called current 
  // Write a helper function which accepts a node 
  //  If the node has a left property, call the helper function on the node
  //  If the node has a right property, call the helper function on the node 
  //  Push the variable of the node to the variable that stores the values
  //  Invoke the helper function with the current variable 
  // Return the array of values

  DFSPostOrder(){
    var data = [], current = this.root

    function traverse(node){
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)
    console.log(data)
    return data
  }

// DFS - In Order - Visit the left branch, then the current node (parent), and then the right branch
//       10
//   6       15
// 3   8         20
// [3,6,8,10,15,20]
  DFSInOrder(){
    var data = [], current= this.root;

    function traverse(node){
      if(node.left)traverse(node.left);
      data.push(node.value);
      if(node.right)traverse(node.right);
    }
    traverse(current)
    console.log(data)
    return data
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

tree.DFSInOrder() // [3,6,8,10,15,20]
// Binary Trees: Each parent node has a 0,1,or 2 child nodes
// Binary Search Trees: 
    // Every parent node has at most two children
    // Every node to the left of a parent node is always smaller than parent
    // Every node to the right of a parent node is always larger than parent



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
  //  start at the roote
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
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(2)
tree.insert(6)
tree.insert(12)
tree.insert(25)

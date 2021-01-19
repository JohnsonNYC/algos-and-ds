class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SLL {
    constructor(){
        this.head = null; // refers to nodes
        this.tail = null; // refers to nodes
        this.length = 0;
    }

    // P U S H : ADDING TO THE END OF THE LIST 
    // function should accept a value
    // Create a new node using the value passed into the function
    // If there is no head property, set head and tail to the node
    // Otherwise set the next property on the tail to the new node and reassign the tail 
    // Increment the length by one 
  push(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++
    return this
  }

  //POP: REMOVING FROM THE END OF THE LIST
  // If there are no nodes in the list, return undefined 
  // Loop through the list until you reach the tail
  // Set the next property of the second to last node to null
  // Set the tail to be the second to last node
  // Decrement the lenght by 1
  // Return the value of the node removed
    
  pop(){
    if(!this.head) return undefined
    
    var current = this.head;
    var temp = current 
    
    while(current.next){
      temp = current 
      current = current.next
    }
    
    this.tail = temp
    this.tail.next = null
    this.length--
    
    if(this.length === 0 ){
      this.head = null
      this.tail = null
    }
    return current
  }

  //Shift: REMOVING A NODE FROM THE BEGINNING OF THE LINKED LIST
  shift(){
    if(!this.head) return undefined
  
    var currentHead = this.head
    this.head = currentHead.next
    currentHead.next = null
    this.length--
    if(this.length === 0) this.tail = null;

    console.log(this)
    return currentHead
  }

  _toArray(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val)
      current = current.next;
    }
    return arr
  }

  removeDups(){
    let current = this.head;
    let temp = current; 
    let stack = new Set()

    while(current){
      if(!stack.has(current.val)){
        stack.add(current.val)
        temp = current;
        current = current.next; 
      }else{
        let deletedNode = current;
        temp.next = current.next;
        current = temp.next;
        deletedNode.next = null
        this.length--
      }
    }
    return this.length
  }

  kthElement(value){
    if(this.length === 0 || value > this.length) return undefined;
    if(value === 1) return this.tail.val;
    if(value === this.length) return this.head.val

    let counter = 1; 
    let numberOfIterations = this.length - (value - 1); //7
    let current = this.head

    while(counter < numberOfIterations){
      current = current.next; 
      counter++
    } 
    return current.val
  }

  deleteMiddleNode(){
    if(this.length === 0) return undefined
    let counter = 0; 
    let middleIndex = this.length % 2 === 0? Math.floor(this.length/2) - 1 : Math.ceil(this.length/2) - 1;
    let current = this.head;
    let temp = current
    while( counter < middleIndex && current.next){
      temp = current
      current = current.next
      counter++
    }
    temp.next = current.next
    current = temp.next
    this.length--

    return this
  }
}

var list = new SLL()
list.push(1)
list.push(2)
list.push(3)

console.log(list.deleteMiddleNode())
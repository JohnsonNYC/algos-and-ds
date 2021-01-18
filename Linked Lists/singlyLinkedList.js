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
    let temp = null;
    let set = new Set();
    while(current){
      if(set.has(current.val)){
        let deletedNode = current;
        temp.next = current.next;
        current = current.next;
        deletedNode.next = null;
      }else{
        set.add(current.val);
        temp = current;
        current = current.next;
      }
    }
    return this
  }
}

var list = new SLL()
list.push(1)
list.push(5) 
list.push(1) 
list.push(6) 
list.push(8) 
list.push(6) 
list.push(8) 
list.push(8) 
list.push(8) 
list.push(8)
console.log(list._toArray())

list.removeDups()
console.log(list._toArray())

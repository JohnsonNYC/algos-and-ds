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

  removeDups(){
  // {1:true, 2:true, 3:true}
  // 1 => 2 => 3 => 3
  //           t           
  //                c          
  // Create Hashtable
  // create two markers
  // if current dne is hashtable, add to hashtable, and current moves up 
    // if current !== temp; temp moves up 
  // if current does exist in hashtable
    // if current is tail
      //
    // if it is not tail
  
  let store = {};
  let current = this.head;
  let temp = current;
  let j= 0 ;

  while(j < this.length){
    if(!store[current.val]){
      store[current.val] = true;
      current = current.next 
    }else{

    }
    console.log(j)
    }
  }
}

var list = new SLL()
list.push('One')
list.push('Two') 
list.push('Two') 
list.push('Four')
list.push('Five')
list.removeDups()

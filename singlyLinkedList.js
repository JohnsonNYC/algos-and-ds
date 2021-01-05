// Linked List - list of elements with no indices that points to the next element
// Each element is a node
// Each node has a value and pointer to the next node
// Random access is not allowed 

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
    // One -> Two -> Three
    //        temp   current
     // One -> Two    Three
    //         tail   current
    return current
  }


  //Shift: REMOVING A NODE FROM THE BEGINNING OF THE LINKED LIST
  // One => Two => Three
  // Two => Three
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

}

var list = new SLL()
list.push('One')
list.push('Two') 
list.shift()
list.shift()

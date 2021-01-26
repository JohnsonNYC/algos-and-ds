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
  // U N S H I F T
  // Create a newNode 
  // If there is no head, set head and tail to newNode
  // temporary = head
  // this.head is not the node
  // newNode.next = temp
  // length++
  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head
    }else{
      var temp = this.head
      this.head = newNode;
      newNode.next = temp;
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

  palindrome(){
    let str = "";
    let revStr = "";
    let current = this.head;
    while(current){
      str += `${current.val}`;
      revStr = `${current.val}` + revStr;
      current = current.next 
    }
    console.log(str,revStr)
    if(str === revStr)return true
    return false
  }

}

function sumLists(list1, list2){
  let num1 =""
  let num2 =""
  let numAns=""
  let newList = new SLL();
  let current1 = list1.head
  let current2 = list2.head

  while(current1){
    num1 = current1.val + num1;
    current1 = current1.next
    
  }
  while(current2){
    num2 = current2.val + num2;
    current2 = current2.next
  }

  numAns += parseInt(num1)+ parseInt(num2)
  for(let num of numAns){
    newList.unshift(num)
  }

  return newList;
}


function intersection (l1,l2){
  let longList = l1.length > l2.length? l1 : l2;
  let shortList = l1.length > l2.length? l2: l1; 

  let longCurrent = longList.head;
  let shortCurrent = shortList.head;

  
  let i = 0;
  let j = 0;
  let listDiff = longList.length - shortList.length;
  let foundNode;
  
  while( i < listDiff && listDiff !== 0){
    longCurrent = longCurrent.next
    i++
  }

  while(j < shortList.length){
    if(shortCurrent.val === longCurrent.val && foundNode === undefined){
      foundNode = shortCurrent
    }else if(foundNode !== undefined){
      if(shortCurrent.val !== longCurrent.val){
        return false
      }
    }
    shortCurrent = shortCurrent.next
    longCurrent = longCurrent.next
    j++
    i++
  }
  return foundNode
}

var list1 = new SLL();
list1.push(3);
list1.push(1);
list1.push(5);
list1.push(9);
list1.push(7);
list1.push(2);
list1.push(1);

var list2 = new SLL();
list2.push(4);
list2.push(6);
list2.push(7);
list2.push(2);
list2.push(1);

console.log(list1)
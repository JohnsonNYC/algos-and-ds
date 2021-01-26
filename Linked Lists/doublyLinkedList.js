// Differnce between 'var' and 'let'

// 'var' is functioned scope which mean it is defined throughout an entire function
// 'let' is block scoped which means it is degined through curly brackets

class Node{
  constructor(val){
    this.next = null;
    this.prev = null; 
    this.val = val 
  }
}

class DLL{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){ // Add node to the end of list
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail; 
      this.tail = newNode;
    }
    this.length++
    return this
  }

  unshift(val){ //add to the beginning of the node 
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return newNode;
  }

  pop(){ // remove node from end of list 
    if(!this.head) return undefined;
    var poppedNode = this.tail;

    if(this.length === 1){
      this.head = null; 
      this.tail = null;
    }else{
      this.tail = poppedNode.prev
      this.tail.next = null;
      poppedNode.prev = null
    }
    this.length--
    return poppedNode;
  }

  shift(){// remove from beggining of list 
    if(!this.head) return undefined
    var shiftedNode = this.head;
    if(this.length === 1){
      this.head = null; 
      this.tail = null;
    }else{
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null; 
    }
    this.length--
    return shiftedNode;
  }

  get(index){
    if(index === 0 || index > this.length ) return undefined;

    if( index <= Math.floor(this.length/2)){
      console.log('traverse from the beginning')
      var count = 1;
      var current = this.head; 
      while(count !== index){
        current = current.next;
        count++
      }
    }else{
      console.log('traverse from the end')
      var count = this.length;
      var current = this.tail; 
      while(count !== index){
        current = current.prev;
        count--
      }
    }
    return current
  }
}

var list = new DLL(); // 1 <==> 2
list.push(1) 
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)


console.log(list.get(10))

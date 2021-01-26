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

  push(val){
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
}

var list = new DLL(); // 1 <==> 2
list.push(1) 
list.push(2)
console.log(list)


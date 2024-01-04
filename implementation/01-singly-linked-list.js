// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val)
        //if the curr head doesnt have val then itr === the new node
        if(!this.head){
          this.head = newNode;
          this.length++;
          return this;
        }
        //seting var to the head
        let cur = this.head;
        // the new node next  = the old head
        newNode.next = cur;

        this.head = newNode
        this.length++;
        return this;
        
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.length++;
            return this;
        }
      
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
      
        curr.next = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here 
        
        if(this.length > 0){
            let curr = this.head;
            this.head = this.head.next;
            this.length--;
            return curr;
        }
        // Your code here 
        
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if(this.length > 0){
        let current = this.head;
        let previous;
        // Write your hypothesis on the time complexity of this method here
        while(current.next !== null){
            //put pointer to node before current
            previous = current;
            current = current.next;
        }
    
        current.next = previous;
        return this;
    }

     
    }

    peekAtHead() {
        // Return the value of head node
         if(this.head !== null){
            return this.head.value;
         }
        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
      let curr = this.head;
      while(curr){
        console.log(curr.value);
        curr = curr.next;
      }
        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

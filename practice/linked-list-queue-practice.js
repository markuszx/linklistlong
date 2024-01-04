// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        // if the head is null
        if (!this.head) {
            //then the head = the new node
            this.head = newNode;
            // in that case just return the head
            return this.head;
        }
        // else iterate through the linked list untill the next value is null
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        // once the next vall does === null which would be our last node in linked list
        // then make that last one the new node
        curr.next = newNode;
        // return this.head;
    }


    addToHead(val) {
        let newnode = new SinglyLinkedNode(val);
        if(!this.head){
           this.head = newnode;
           return this.head;
        }

      newnode.next = this.head;
      this.head = newnode


    }


    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        let length = 0;
        // Your code here
        let curr = this.head;
        while (curr) {
            length++
            curr = curr.next;

        }
        return length;
        //needs to iterate through linked list
        //needs to count as go though
        //return length

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here
        let sum = 0;
        // Your code here
        let curr = this.head;
        while (curr) {
            sum += curr.value
            curr = curr.next;

        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here
        let sum = 0;
        // Your code here
        let curr = this.head;
        while (curr) {
            sum += curr.value
            curr = curr.next;

        }
        return sum / this.listLength();

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here
        // Your code here

        // Your code here
        let index = 0;
        let curr = this.head;
        while (curr) {
            if (index === n) return curr;
            index++
            curr = curr.next;


        }



        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let length = this.listLength()
        let index = 0;
        let curr = this.head;
        while (curr) {
            if (index === Math.floor((length - 1) / 2)) return curr;
            index++
            curr = curr.next;


        }

        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        // Your code here
        let curr = this.head;
        let reverse = new SinglyLinkedList()

        while (curr) {
            reverse.addToHead(curr.value)
            //console.log(curr.value)

            curr = curr.next;

        }

        return reverse

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        if (!this.head) return this

        let cur = this.head
        let next = cur
        let prev = null
        // Your code here
        //while this .head has a valid value
         //
        while (next) {
            //this.head = this.head.next
            next = cur.next
            //this .head .next = null
            cur.next = prev
            //null  = this.head
            prev = cur
            // this.head = this.head.next
            cur = next

        }
        //this.head = this.head.next
        this.head = prev
        return this

        // Write your hypothesis on the time complexity of this method here
        // i want to take the last node and put it as first
        // and i want to take out from the back once it has been added

// =======
//         let curr = this.head;
//         let prev = null;
//         let next = null;
//         // Your code here
//         while(curr !== null){
//            next = curr.next;
//            curr.next = prev;
//            prev = curr;
//            curr = next;
//         }

//         // Write your hypothesis on the time complexity of this method here
//         this.head = prev;
//         return this;
// >>>>>>> 8c946357e7eb4f3b30144ac92f3a89dd72dd0bde
    

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length ++
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
        return this.head;
    }


    addTohead(val){


     let newnode = new DoublyLinkedNode(val);
     if(!this.head){
        this.head = newnode;
        this.length++
        return this.head;
     }

   newnode.next = this.head;
   this.head = newnode

  this.length++


   }


    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here

        let index = 0;
        let curr = this.head;
        while (curr) {
            if (index === Math.floor((this.length - 1) / 2)) return curr;
            index++
            curr = curr.next;


        }


        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
         let newLinkList = new DoublyLinkedList()
        // Your code here
        while(this.head){
             newLinkList.addTohead(this.head.value)

             this.head = this.head.next

        }
        return newLinkList

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Your code here
 if (!this.head) return this

        let cur = this.head
        let next = cur
        let prev = null
        // Your code here
        //while this .head has a valid value
         //
        while (next) {
            //this.head = this.head.next
            next = cur.next
            //this .head .next = null
            cur.next = prev
            //null  = this.head
            prev = cur
            // this.head = this.head.next
            cur = next

        }
        //this.head = this.head.next
        this.head = prev
        return this


        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

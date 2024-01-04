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
        let newNode = new SinglyLinkedNode(val)
        //if the curr head doesnt have val then itr === the new node
        if(!this.head){
          this.head = newNode;
          return this.head

        }
        //seting var to the head
        let cur = this.head;
        // the new node next  = the old head
        newNode.next = cur;

        this.head = newNode
        return this.head
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

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

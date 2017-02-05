const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data, this._tail, null)
        if (this.length) {
            this._tail.next = newNode;
            this._tail = newNode;
        }
        else {
            this._head = this._tail = newNode;
        }
        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        if (index > -1 && index < this.length) {
            let node = this._head;
            while(index--) {
                node = node.next;
            }
            return node.data;
        }
        return null
    }

    insertAt(index, data) {
        if (index > -1 && index < this.length) {
            if (index == this.length || index == 0){
                this.append(data)
            }
            else {
                let newNode = new Node(data, this._tail, null)
                let nextNode = this._head;
                while(index--) {
                    nextNode = nextNode.next;
                }
                let prevNode = nextNode.prev;

                prevNode.next = newNode;
                prevNode.prev = prevNode;

                newNode.next = nextNode;
                nextNode.prev = nextNode.next;
            }
        }
        return this; 
    }

    isEmpty() {
        return this.length ? false : true;
    }

    clear() {
        this._head = this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index > -1 && index < this.length) {
            if (index == 0) {
                this.clear();
            }
            else if (index == this.length) {
                this._tail = this.node._tail.prev;
                this._tail.prev = null;
            }
            else {
                let node = this._head;
                while(index--) {
                    node = node.next;
                }
                let prevNode = node.prev;
                let nextNode = node.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode
            }
            this.length--;
        }

        return this;
    }

    reverse() {
        if (this.length > 1) {
            let first = this._head;
            let last = this._tail;

            for (let i = 0; i*2 < this.length; i++) {
                [first.data, last.data] = [last.data, first.data]
                first = first.next;
                last = last.prev;
            }
        }

        return this;
    }

    indexOf(data) {
        let node = this._head;
        for (let i = 0; i < this.length; i++ ) {
            if (node.data == data){
                return i
            }
            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
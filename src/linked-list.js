const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.forward = null;
        this.backwards = null;
    }

    append(data) {
        if(this.length == 0) {
            let temp = new Node(data);
            this.forward = this.backwards = temp; 
        } else {
            let temp = new Node(data,this.backwards,null);
            this.backwards.next = temp;
            this.backwards = temp;
        }
        this.length++;
        return this;
    }

    head() {
        return this.forward ? this.forward.data : null;
    }

    tail() {
        return this.backwards ? this.backwards.data : null;
    }

    at(index) {
        if(index > -1 && index < this.length){
            let current = this.forward;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current.data;
        }
        return this;
    }

    insertAt(index, data) {
        if(index === this.length) {
            this.append(data);

        } 

        }*/
        else {
            let current = this.forward;
            while (current && index-- > 0) {
                current = current.next;
            }

            if (!current) {
                return this;
            }

            let temp = new Node(data, current.prev, current);
            
            if (current.prev) {
                current.prev.next = temp;
            } else {
                this.forward = temp;
            }
                current.prev = temp;
            this.length++;
        }
        return this;        
    }

    isEmpty() {
        if(this.length == 0) return true;
        return false;
    }

    clear() {
        this.forward = this.backwards = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index === 0 && this.length === 1) return this.clear();
        let current = this.forward;
        while (current && index-- > 0) {
            current = current.next;
        }

        if (!current) {
            return this;
        }
        if (index === 0) {
            this.forward = this.forward.next;
            this.forward.prev = null;
        } else if (index === this.length-1) {
            this.backwards = this.tail.prev;
            this.backwards.next = null;  
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }


        this.length--;
        return this;        
    }

    reverse() {
        if(this.length == 1) return this;
        let first = this.forward;
        let last = this.backwards;

        for (let i = 0; i*2 < this.length; i++) {
            let temp = first.data;
            first.data = last.data;
            last.data = temp;

            first = first.next;
            last = last.prev;
        }
        return this;
    }

    indexOf(data) {
        let current = this.forward;
        for (let i = 0; i < this.length; i++) {
            if (current.data == data) return i;
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;

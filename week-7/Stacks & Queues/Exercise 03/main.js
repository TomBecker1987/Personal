class Queue {
    constructor(){
        this.queue = []
        this.length = 0
    }
    enqueue(item){
        this.queue.unshift(item)
        this.length++
    }
    print(){
        console.log(this.queue)
    }
    isEmpty(){
        if ( this.length > 0 ) {
            return false
        } 
        else {
            return true
        }
    }
    peek(){
        if ( this.isEmpty() ) {
            return null
        }
        else {
            return this.queue[0]
        }
    }
    dequeue(){
        if (this.isEmpty()){
            return null
        }
        else {
            this.queue.shift()
            this.length--
        }
    }
}


class DuoQueue {
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }
    enqueue(person,qNum){
        if (qNum == 1){
            this.q1.enqueue(person)
        }
        else if (qNum == 2){
            this.q2.enqueue(person)
        }
    }
    dequeue(qNum){
        if (qNum == 1){
            this.q1.dequeue()
        }
        else if (qNum == 2){
            this.q2.dequeue()
        }
    }
    getLongestQueue(){
        if (this.q1.length>this.q2.length){
            return this.q1
        }
        else {
            return this.q2
        }        
    }
    getShortestQueue(){
        if (this.q1.length<this.q2.length){
            return this.q1
        }
        else {
            return this.q2
        }        
    }
    balanceQueues(){
        if (Math.abs(this.q1.length-this.q2.length) >= 1){
            if (this.q1.length>this.q2.length){
                this.q2.enqueue(this.q1.peek())
                this.q1.dequeue()
            }
            else if (this.q2.length>this.q1.length){
                this.q1.enqueue(this.q2.peek())
                this.q2.dequeue()
            }
            return
        }
        return this.balanceQueues()
    }
}

let dq = new DuoQueue()
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

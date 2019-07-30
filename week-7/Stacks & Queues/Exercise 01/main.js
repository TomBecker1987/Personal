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

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true

class Stack{
    constructor(){
        this.list = [] 
        this.length = 0      
    }
    push(item){
        this.list[this.list.length] = item
        this.length++
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
        if ( this.length > 0 ) {
            return this.list[this.list.length-1]
        }
        else {
            return null
        }
    }
    pop(){
        if ( this.isEmpty() ) {
            return null
        }
        else {
            this.length--
            return delete this.list[this.length]
        }
    }
    print(){
        console.log(this.list)
    }
}

let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true



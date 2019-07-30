class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return delete this.stack[this.length]
    }
}

const arr1 = [1, 2, 3]
const arr2 = []

// let swap = function(arr1,arr2){
//     if ( arr1.length == 0 ) {return}
//     arr2.push(arr1[0])
//     arr1.shift()
//     swap(arr1,arr2)
// }


let swap = function(arr1,arr2){
    let arr1Stack = new Stack()
}

// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]

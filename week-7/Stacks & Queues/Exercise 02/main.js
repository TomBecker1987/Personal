class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.minValues = []
    }
    peek() {
        if (this.length > 0) {
            return this.stack[this.stack.length - 1]
        }
        else {
            return null
        }
    }
    push(item) {
        this.stack[this.stack.length] = item
        this.length++
        if (this.minValues.length == 0) {
            this.minValues[0] = item
        }
        else if (this.minValues.length > 0) {
            if (item < this.minValues[this.minValues.length-1]) {
                this.minValues.push(item)
            }
        }
    }
    isEmpty() {
        if (this.length > 0) {
            return false
        }
        else {
            return true
        }
    }
    pop() {
        if ( this.length > 0 ) {
            if ( this.stack[this.stack.length-1] === this.minValues[this.minValues.length-1] ) {
                this.minValues.pop()
                this.stack.pop()
            }
            else {
                this.stack.pop()
            }
        }
        else {
            return null
        }
    }
    print() {
        console.log(this.stack)
    }
    getMin() {
        if ( this.minValues.length == 0 ) {
            return null
        }
        else {
            return this.minValues[this.minValues.length-1]
        }
    }
}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19




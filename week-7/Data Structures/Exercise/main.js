class UniqueArray {
    constructor() {
        this.items = []
        this.itemsAdded = {}
    }
    add(item) {
        this.itemsAdded[item] ? null : (this.items.push(item), this.itemsAdded[item] = "added")
    }
    showAll() {
        this.items.forEach(i => console.log(i))
    }
    exists(item) {
        if (this.itemsAdded[item]) {
            return true
        }
        else {
            return false
        }
    }
    get(index) {
        if (this.items[index]) {
            return this.items[index]
        }
        else {
            return -1
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"


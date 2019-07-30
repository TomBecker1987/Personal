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
    }
    exists(item) {
        if ( typeof(item) == 'object' ) {
            
        }
        else {
            if (this.itemsAdded[item]) {
                return true
            }
            else {
                return false
            }
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


const increaseByNameLength = function(money,name){
    let result = name.length * money
    return result
}

const makeRegal = function(name){
    name = "His Royal Highness, " + name
    return name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

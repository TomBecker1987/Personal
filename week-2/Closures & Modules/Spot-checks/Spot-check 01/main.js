const family = function () {
    let members = []
    let birth = function (name) {
        members.push(name)
        console.log(members)
    }
    return birth 
}

giveBirth = family()

giveBirth("Oleg")
giveBirth("Dima")
giveBirth("Sasha")
giveBirth("Misha")
giveBirth("Alex")
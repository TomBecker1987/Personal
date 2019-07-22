const fetchData = function (surname) {
    Person.find({ lastName: surname }, function (err, people) {
        console.log(people)
    })
}


const fetchData = async function(surname) {
    let result = await Person.find({ lastName: surname })
    console.log(result)
}
agesArray = [12,57,32,12,57,66,89]

const findDuplicates2 = function (ages) {
    let numberOfOccurences = {};
    ages.forEach( a => numberOfOccurences[a]? (numberOfOccurences[a]++, console.log(`${a} has duplicates.`)) : numberOfOccurences[a] = 1 )
}

findDuplicates2(agesArray)
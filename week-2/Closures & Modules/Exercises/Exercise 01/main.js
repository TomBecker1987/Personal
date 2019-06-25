const StringFormatter = function () {
    const capitalizeFirst = function(string) {
        string = string.toUpperCase()[0] + string.toLowerCase().slice(1)
        return string
    }
    const skewerCase = function (string) {
        newString = "";
        for (let letter of string) {
            letter == " " ?
                newString += "-"
                :
                newString += letter
        }
    return newString
    }
    return {
        capitalizeFirst:capitalizeFirst,
        skewerCase:skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

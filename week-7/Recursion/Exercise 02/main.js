let reverseString = function(string,newString = ''){

    if (string.length == 0) {return newString}

    newString += string[string.length-1]
    string = string.substring(0,string.length-1)

    return reverseString(string,newString)

}

console.log(reverseString('computer'))
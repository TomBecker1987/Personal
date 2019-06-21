let story = `In the beginning there was light. Then there were wolves. \
Finally there was a big fire. \
Ultimately, Shelob the wolf-master put out the fire with her feet.\
 But until then, the fire caused one heck of a lot of damage.`

story = story.toLowerCase();

let findSpecialCharacter = function (story, specialCharacters) {
  let isSpecialCharacter = [];
  for (let y in story) {
    isSpecialCharacter[y] = 0;
  }
  for ( let i in story ) {
    for ( let index in specialCharacters ) {
        if ( specialCharacters[index] == story[i] ) {
            isSpecialCharacter[i]++;
        }
    }
  }
  return isSpecialCharacter
}

let removeSpecialCharacter = function ( list ) {
  let cleanStory = "";
  for ( let i in list ) {
    if ( list[i] == 0 ) {
      cleanStory += story[i]
    }
  }
  return cleanStory
}

let getWords = function (string) {
  let listOfWords = [];
  let tempWord = "";
  for (let letter of string) {
    if (letter != " ") {
      tempWord += letter
    }
    else if (letter == " ") {
      listOfWords.push(tempWord);
      tempWord = ""
    }
  }
  listOfWords.push(tempWord)
  return listOfWords
}

let countWords = function(wordList) {
  let output = [];
  let temp = 1;
  for ( let word of wordList ) {
    for (let x = 1 ; x < wordList.length ; x++ ) {
      if ( word == wordList[x] ) {
        temp++
      }
    }
    output.push(temp)
    temp = 0;
  }
  return output
}

let createObject = function (words,count) {
  let obj = {}
  for (let i in words) {
    obj[words[i]] = count[i]
  }
  return obj
}

let wordCount = function(story) {
  const specialChars = [",", ".", "'", '"',"?", "!", ";"]
  let foundCharacters = findSpecialCharacter(story,specialChars)
  let cleanStory = removeSpecialCharacter( foundCharacters )
  let words = getWords(cleanStory)
  let count = countWords(words)
  let object = createObject(words,count)

  for (let i in Object.keys(object)) {
    console.log(`${Object.keys(object)[i]}:${Object.values(object)[i]}`)
  }
}

wordCount(story)
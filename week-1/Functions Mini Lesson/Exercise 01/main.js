people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is a ${getAge(person)} years old` //Yes - you can put a function call inside the tick quotes!
    summary += ` ${getProfession(person)}`
    summary += ` from ${getCityCountry(person)}. `
    summary += `${capitalize(person.name)} loves to say " ${getCatchphrase(person)}. `
    console.log(summary)
  }

    //Petra is 31 year old Jet Plane Mechanic from Bostork, Greenmark. Petra loves to say "That's my engine, bub".
  
  
  const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }

  const getAge = function (person) {
    let age = person.age;
    return age
  } 

  const getProfession = function (person) {
    let profession = person.profession;
    return profession
  }

  const getCityCountry = function (person) {
      let cityCountry = `${person.city}, ${person.country}`;
      return cityCountry
  }

  const getCatchphrase = function (person) {
      let phrase = person.catchphrase;
      return phrase
  }


for ( let i in people_info ) {
    console.log(getSummary(people_info[i]))
}
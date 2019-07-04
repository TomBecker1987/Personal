localStorage.personalData = JSON.stringify({
    averageTimeOnSite: {unit: "hr", amt: 9},
    probabilityOfFriends: 0.02,
    commonKeywords: ["salsa for one", "1 vs. none Chess"]
  })

  let userStuff = JSON.parse(localStorage.personalData)

console.log(userStuff.probabilityOfFriends) //prints 0.02


let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}


//JS - Setting (all of these are valid)
localStorage.userStorage = JSON.stringify(userStorage)
localStorage.setItem('userStorage', JSON.stringify(userStorage))
localStorage['userStorage'] = JSON.stringify(userStorage)

//In the browser:
let data = JSON.parse(localStorage.userStorage)
data.cart[data.cart.length - 1].count
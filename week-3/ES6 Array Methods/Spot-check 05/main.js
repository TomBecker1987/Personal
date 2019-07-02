let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]


const isThereaMarvelMovie = movies.some( m => m.studio == "Marvel" )
const areAllMoviesFromAfter2020 = movies.every( m => m.year > 2020 ) 

isThereaMarvelMovie ? 
    console.log("Let's go watch some movies")
    :
    console.log("Let's stay home")

areAllMoviesFromAfter2020 ?
    console.log("Futuristic stuff")
    :
    console.log("Yawn")
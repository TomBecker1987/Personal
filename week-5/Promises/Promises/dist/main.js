// import { promise } from "dns";

// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

// let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.

// p.then(function(word){
//     console.log(word)
// })

//************** */spot check 1 **************88

// $.get('/randomWord')
//     .then(function(word){
//       console.log(word)
//     })

// $.get('/sentiment/Ploy')
//     .then(function(sentiment){
//         console.log(sentiment)
//     })

// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })

// $.get('/randomWord')
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`)
//     })
//     .catch(function (error) { console.log(error) })
//     .then(function (synonyms) {
//         console.log(synonyms)
//     })
//     .catch(function (error) { console.log(error) })


// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })

// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

// class APIManager {
//     fetch() {
//         return $.get('/data')
//     }
// }

// class Renderer {
//     render(dataPromise) {
//         dataPromise.then(function (data) {
//             $("#body").append(`<div>${data}</div>`)
//         })
//     }
// }

// const apiManager = new APIManager()
// const renderer = new Renderer()

// let initialDataPromise = apiManager.fetch()
// renderer.render(initialDataPromise) //initial page load

// $(".some-thing").on("click", function () {
//     let newDataPromise = apiManager.fetch()
//     renderer.render(newDataPromise)
// })

//*******exercise 1 ************//

// let randomWord = $.get(`/randomWord`)

// randomWord.then(function(word){
//     let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
//     book.then(function(book){
//         console.log(book)
//         console.log(word)
//     })
// })

//*******exercise 1 ************//


//*******exercise 2 ************//

$.get(`/randomWord`).then(function(word){
    let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`);
    let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=72l1yLjkl7bkm4X6d7DSAv7lFNg7Yfv7&limit=1`)
    Promise.all([book,gif])
        .then(function(results){
            $("body").append(`<div>${results[0].items[0].volumeInfo.title}</div>`)
            $("body").append(`<iframe src="${results[1].data[0].embed_url}" frameborder="0"></iframe>`)
            
            console.log(results)
            console.log(word)
        })
})




//*******exercise 2 ************//

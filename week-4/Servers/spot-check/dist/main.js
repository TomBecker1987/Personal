let  displayHB = function (array) {
  let source = $("#first-template").html()
  let template = Handlebars.compile(source)
  newHTML = template({data : array})
  $("#dataList").append(newHTML)
}



// get data

let getData = function () {
  // let output
      $.ajax({
      method:"GET",
      url: `https://jsonplaceholder.typicode.com/users`,
      success: function(data) {
        displayHB(data)
        console.log(data)
      },
      error: function (xhr, text, error) {
        console.log(text)
      }
    })
    // console.log(output)
  }

var xhr = $.get("https://jsonplaceholder.typicode.com/users");
xhr.done(function(data) { console.log("success got data", data); });

console.log(getData())

let logosContainerWidth = $("#logos").width()

let roundedNum = Math.round(logosContainerWidth / 40)

let personFontSymbol =  `<i class="fa fa-male" data-color="1"></i>`

let personFontRow = personFontSymbol.repeat(roundedNum)

console.log(personFontRow)


//****************AJAX example****************//

// let func = function (input) {
//       $.ajax({
//       method:"GET",
//       url: `https://api.giphy.com/v1/gifs/search?api_key=QscPQqnoUkNdRdHOb0NU22NDjUXX0Mc6&q=${input}&limit=25&offset=0&rating=G&lang=en`,
//       success: function(data) {
//         // console.log(data)
//         let firstGIF = data.data[0].embed_url
//         $("body").append(`<iframe src="${firstGIF}" frameborder="0"></iframe>`)
//         return firstGIF
//       },
//       error: function (xhr, text, error) {
//         console.log(text)
//       }
//     })
//   }
//javascript, jQuery

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

// func("bunny")



//****************handlebars example****************//


// let = animalsFunc = function () {
//   let source = $("#animals-template").html()
//   let template = Handlebars.compile(source)
//   newHTML = template({animals})
//   $(".animals").append(newHTML)
// }

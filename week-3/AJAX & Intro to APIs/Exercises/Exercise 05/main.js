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

$("button").on("click", function () {
  let input = $("input").val()
  $("input").val('')
  $.ajax({
    method:"GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=QscPQqnoUkNdRdHOb0NU22NDjUXX0Mc6&q=${input}&limit=25&offset=0&rating=G&lang=en`,
    success: function(data) {
      // console.log(data)
      let firstGIF = data.data[0].embed_url
      $("#image").empty()
      $("#image").append(`<iframe src="${firstGIF}" frameborder="0"></iframe>`)
      return firstGIF
    },
    error: function (xhr, text, error) {
      console.log(text)
    }
  })
})
let fetch = function (ISBN) {
  const useData = function (data) {
  console.log(data)
}


$.ajax({
  method:"GET",
  url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
  success: useData,
  error: function (xhr, text, error) {
    console.log(text)
  }
})
}

// fetch(9780575087057)
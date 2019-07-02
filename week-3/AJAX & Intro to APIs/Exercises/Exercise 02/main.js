let fetch = function (queryType, queryValue) {
    const useData = function (data) {
    console.log(data)
  }
  $.ajax({
    method:"GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: useData,
    error: function (xhr, text, error) {
      console.log(text)
    }
  })
}


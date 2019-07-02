let fetch = function (queryType, queryValue) {
    const useData = function (data) {
    console.log(data.items)
    data.items.forEach( i => { console.log(`Title: ${i.volumeInfo.title} Author: ${i.volumeInfo.authors} ISBN: ${i.volumeInfo.industryIdentifiers[0].identifier}`) } )
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


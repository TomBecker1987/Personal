let request = require('request')

request('http://www.omdbapi.com/?apikey=de72209c&t=The+Lion+King', function(err, response){
    let obj = (JSON.parse(response.body))
    console.log(obj.Released)
})

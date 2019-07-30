let loadPage = function(){
    $.get('/stored',function(response){
        $('#text-to-display').append(`${response}`)
        console.log(response)
    })
}

loadPage()

$('button').on('click', function(){
    let input = $('input').val()
    $('#text-to-display').append(`${input}`)
    $.post('/save', {value:input} ,function(result){
      console.log(result)
    })
})


$(".feedme").on("click", function(){
    feedmeTxt = $(this).text()
    let divCopy = `<div class="feedme">${feedmeTxt}</div>`//use template literals and $(this)
    
    $("body").append(divCopy)
  })
  
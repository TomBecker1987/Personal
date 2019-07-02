const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]


let = animalsFunc = function () {
    let source = $("#animals-template").html()
    let template = Handlebars.compile(source)
    newHTML = template({animals})
    $(".animals").append(newHTML)
}

let languagesFunc = function () {
    let source = $("#languages-template").html()
    let template = Handlebars.compile(source)
    newHTML = template({languages})
    $(".languages").append(newHTML)
}


animalsFunc()
languagesFunc()
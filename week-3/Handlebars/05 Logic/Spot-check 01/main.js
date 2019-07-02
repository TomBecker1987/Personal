var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the answer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}

let source = $("#source-template").html()

let template = Handlebars.compile(source)

newHTML = template(classData)

$(".menu").append(newHTML)
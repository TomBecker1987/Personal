let posts = [
    {name:"Vladimir",surname:"Putin"},
    {name:"Donald",surname:"Trump"},
    {name:"Benjamin",surname:"Netanyahu"},
    {name:"Gary",surname:"Yourofsky"}
]

$("button").after(`<div id="posts-container"></div>`)

let render = function (){
    for (let post of posts) {
        $("#posts-container").append(`<div>name: ${post.name}, surname: ${post.surname}</div>`)
    }
}

$("button").on("click", function () {
    let srnm = $("input#surname").val()
    let nm = $("input#name").val()
    posts.push({name:nm,surname:srnm})
    $("#posts-container").empty()
    render()
} )

render()
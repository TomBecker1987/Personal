// $("#colors > span").each(function(){
//     $(this).css("color",`${$(this).data("color")}`)
// }

// $("#colors > span").css("background-color",`${$(this).data("color")}`)

let spanList = $("#colors > span")

// for (let span of spanList) {
//     console.log(span)
// }

// for (let span of spanList) {
//     console.log($(span).data("color"))
// }



for (let span of spanList) {
    $(span).addClass("picker")
    $(span).css("display","inline-block")
    $(span).css("background-color",`${$(span).data("color")}`)
    $(span).css("width","100px")
    $(span).css("height","30px")
    $(span).css("border-radius","5px")
    $(span).css("box-shadow","1px 1px 3px black")
    $(span).css("margin","5px")
    $(span).css("padding-top","10px")
    $(span).css("font-family","Arial, Helvetica, sans-serif")
    $(span).css("font-size","15px")
    $(span).css("font-weight","bold")
    $(span).on("click", function() {
        $(".box").css("background-color",`${$(span).data("color")}`)
    })
}
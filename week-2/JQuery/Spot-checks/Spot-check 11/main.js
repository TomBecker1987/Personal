let element = "<div>KAKAMIAKA!</div>"
element = $(element)
$("body").append(element)

let rmv = function () {
  $(this).remove()
}

element.hover(rmv)
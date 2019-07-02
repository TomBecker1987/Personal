let computerId = []


$("button.generator").on("click", function () {
    console.log(`processor id: ${$(this).closest(".processor").attr('id')}`)
    console.log(`computer's data id: ${$(this).closest(".computer").data("id")}`)
    computerId.push({comp_id:$(this).closest(".computer").data("id")})
    console.log(`BUS: ${$(this).closest(".computer").find(".BUS").text()}`)
})

$("button.validator").on("click", function () {
    console.log(`generator: ${$(this).closest(".computer").find(".generator").text()}`)
    console.log(`MB: ${$(this).closest(".computer").find(".MB").text()}`)
    console.log(`qr: ${$(this).closest(".computer").find(".processor").children("span").first().text()}`)
    console.log(`qr: ${$(this).closest(".computer").find(".processor").children("span").last().text()}`)
})
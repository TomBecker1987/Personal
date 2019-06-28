let cart = $("#cart")

cart.after(`<ul id="print-items"></ul>`)

let listToPrint = $("#print-items")

$(".item").on("click", function () {
    if ($(this).data("instock")) {
        listToPrint.append(`<li>${$(this).text()}</li>`)
        cart.append(`<div class="cart-item">${$(this).text()}</div>`)
        cart.css("display","none")
    }
    
})

console.log(cart)


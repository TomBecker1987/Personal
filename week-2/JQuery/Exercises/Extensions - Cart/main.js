let cart = $("#cart")

cart.after(`<ul id="print-items"></ul>`)

let listToPrint = $("#print-items")

let divIdCount = 1

$(".item").on("click", function () {


    if ($(this).data("instock")) {
        listToPrint.append(`<li id=itm${divIdCount}>${$(this).text()}</li>`)
        cart.append(`<div class="cart-item" id="item${divIdCount}">${$(this).text()}</div>`)
        cart.css("display","none")
        divIdCount++
        $("li").on("click",function(){
            let liId = $(this).attr('id')
            let liIdLast = liId[liId.length-1]
            $(this).remove()
            $(`#item${liIdLast}`).remove()
        })
    }   

    // let removeCart = function(){
    //     let num = $(this).attr('id')
    //     let n = num[num.length-1]
    //     $(this).remove()
    //     let cartItem = $(".cart-item")
    //     let crtId = crt.attr('id')
    //     let crtNum = crtId[crtId.length-1]
    //     }
}
)
    



// listToPrint.on("click","li",function() {
//     let num = $(this).attr('id')
//     let n = num[num.length-1]
//     // console.log(n)
//     $(this).remove()
    
//     let crt = $("body #cart")
//     console.log(crt)
    
// })

// console.log(cart)


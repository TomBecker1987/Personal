let wisdom = []

let appendTextDiv = function(obj) {
    let source = $("#first-template").html()
    let template = Handlebars.compile(source)
    let newHTML = template(obj)
    $("#text-container").append(newHTML)
}

if ( localStorage.wisdom ) {
    let lsWisdom = JSON.parse(localStorage.wisdom);
    // appendTextDiv(lsWisdom)
    lsWisdom.forEach( w => appendTextDiv(w) )
}
else {
    localStorage.wisdom = "[]"
}


//button event listener

$("button").on("click", function () {
    let txt = $("input").val()
    $("input").val('')
    let txtWisdom = { text: txt }
    wisdom.push(txtWisdom)
    appendTextDiv(txtWisdom)
    if (wisdom.length % 2 == 0){
        let lsWisdom = JSON.parse(localStorage.wisdom)
        let newLsWisdom = lsWisdom.concat(wisdom)
        localStorage.wisdom = JSON.stringify(newLsWisdom)
        console.log(localStorage.wisdom)
        wisdom = []
    }
})

//VVVVVVVVVVVVVVVVVVVVVVVV

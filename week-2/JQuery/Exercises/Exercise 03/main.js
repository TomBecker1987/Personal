$("body").append(`<div class="box" id="box1"></div>`);
$("body").append(`<div class="box" id="box2"></div>`);
$(".box").css("border-radius","8%")
$(".box").css("box-shadow","1px 3px 5px grey")
$("box2").css("background-color","orange")

let flag = 0;

let tglColor = function () {
    if (flag == 0) {
        $("#box2").css("background-color","orange")
        $("#box1").css("background-color","#8e44ad")
        flag = 1;
    }
    else {
        $("#box2").css("background-color","#8e44ad")
        $("#box1").css("background-color","orange") 
        flag = 0; 
    }
}


$(".box").on("mouseleave",tglColor)

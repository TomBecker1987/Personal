function randColor() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}



let createBox = function () {
    let boxLst = []
    for (let i = 0 ; i < 6 ; i++) {
        let box = document.createElement("div")
        boxLst.push(box)
        document.querySelector("div#container").appendChild(box)
        box.setAttribute("id", `box${i+1}`)
        box.setAttribute("onmouseenter","chngColor(this)")
    }
    return boxLst
}

let chngColor = function (box) {
    box.style.backgroundColor = randColor();
}

createBox()


let firstColors = function () {
    let boxes = document.querySelectorAll("#container > div")
    for (let box of boxes) {
        box.style.backgroundColor = randColor();
    }
}

firstColors()


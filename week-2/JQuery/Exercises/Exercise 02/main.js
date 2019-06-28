let lst = $("ul")

lst.after(`<input type="text" placeholder="Human name"></input>`)
$("input").after(`<button type="button">Add human</button>`)

let removeItem = function () {
  $(this).remove()
}

let addName = function () {
  lst.append(`<li class="list-item">${$("input").val()}</li>`);
  let len = document.getElementById("ul").childElementCount;
  $("input").val("");
  if (len == 4) {
    $("button").remove();
    $("input").remove();
  }
  $(".list-item").on("click",removeItem)

}

$("button").on("click", addName)


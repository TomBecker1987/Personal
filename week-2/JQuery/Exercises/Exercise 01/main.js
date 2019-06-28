let lst = $("ul")

lst.after(`<input type="text" placeholder="Human name"></input>`)
$("input").after(`<button type="button">Add human</button>`)

let addName = function () {
  lst.append(`<li>${$("input").val()}</li>`);
  let len = document.getElementById("ul").childElementCount;
  $("input").val("");
  if (len == 4) {
    $("button").remove();
    $("input").remove();

  }
}

$("button").on("click", addName)


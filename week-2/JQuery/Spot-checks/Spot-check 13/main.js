let blogs = $("div#blogs")

let addBlog = function () {
  blogs.append(`<div class="blog">Text</div>`)
}

blogs.on("mouseenter",addBlog)

blogs.on("click", ".blog" ,function () {
  $(this).text("blargh")
})
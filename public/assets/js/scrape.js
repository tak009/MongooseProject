$(function() {
  console.log("SCRAPE");
  $("#headlines").hide();
  $("#scrape-btn").on("click", function(){
    alert("Added 20 new articles!");
  });


  $(".save").on("click", function() {
    var article_id = $(this).closest("div.article").data("id");
    var title = $(this).prev().text();
    var link = $(this).prev().attr("href");
    var summary = ($(this).parent().parent().next().text()).replace(/^\s\s*/, "");

    var newArticle = {
      articleId: article_id,
      title: title,
      link: link,
      summary: summary
    };

    $.ajax({
        type: "POST",
        url: "/save_article",
        data: newArticle
      })
      .then(function(data) {
        alert("The article was saved!");

      });
  });

  $(".delete").on("click", function() {
    var article_id = $(this).closest("div.article").data("id");

    var delArticle = {
      articleId: article_id
    };

    console.log(delArticle);

    $.ajax({
        type: "PUT",
        url: "/delete/" + article_id,
        data: delArticle
      })
      .then(function(data) {
        window.location.href = "/saved";
      });
  });


});

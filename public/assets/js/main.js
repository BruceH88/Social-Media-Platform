$(function () {
  $(".postSubmit").on("click", function (event) {
    console.log("post submit was clicked");

    const userId = 1;
    const topicId = 1;  //$("#topicInput").data("id");
    const post = $("#postInput").val().trim();

    const newPost = {
      body: post,
      UserId: userId,
      TopicId: topicId
    };

    $.post("/api/posts",
      newPost
    ).then(
      function (result) {
        console.log(result);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".topicSubmit").on("click", function (event) {
    console.log("topic submit was clicked");

    const topic = $("#topicInput").val().trim();
    const newTopic = {
      topic: topic,
    };

    $.post("/api/topics",
      newTopic
    ).then(
      function (result) {
        console.log(result);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});
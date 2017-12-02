$("button").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
      console.log(this);
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
  console
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height_still.url);

            
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
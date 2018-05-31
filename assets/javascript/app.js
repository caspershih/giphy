// empty array to hold gif
    var gif = [];

// get the gif data

    function displaygif() {

        var gif = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

// create ajax call

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

// div that holds the gif
        var gifDiv = $("<div class='gif-container'>")

// the submit button will add the gif into array "gif"


    })
    }

    function renderButtons() {

        for (var i=0; i < gif.length; i++) {

            var add = $("<button>");
            a.addClass("gif-btn");
            a.attr("data-name", movies[i]);
        }
    }

    $("#add-gif").on("click", function(event) {

        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        gif.push(gif);

        renderButtons();
    });

    $(document).on("click",);

    renderButtons();

// as the gif is added, the button also shows up on page


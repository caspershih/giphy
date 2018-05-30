// empty array to hold gif
    var gif = [];

// gif function

    function displaygif() {

        var gif = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

// create ajax call

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

// div that holds the gif

        var gifDiv = $("<div class='gif'>")

        

    })

    }



$(document).ready(function () {

    $("#evtButton").on("click", function (event) {
        event.preventDefault();

        console.log("Fired");

        // Question: What does this code do??
        $.get("/viewevent", function (results) {
            window.location.href = "/viewevent";

        });
    });

    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        var searchedGame = $("#gameSearch").val();
        // console.log(searchedGame);

        $.get('/event/' + searchedGame, function (results) {
            window.location.href = '/event/' + searchedGame;
        })
    })

    $("#joinUp").on("click", function (event) {
        event.preventDefault();

        $.ajax({
            method: "PUT",
            url: "/event/update",
            data: { 
                id : $("#joinUp").attr('data-name') 
            }
        })

    })

    $("#logout").on("click", function (event) {
        event.preventDefault();

        $.get("/logout", function (results) {
            console.log("Clicked");
            window.location.href = "/";

        });
    })

    $("#eventCreate").on("click", function(event) {
        event.preventDefault();
  
  
        var newEvent = {
          eventName: $("#evtName").val(),
          eventDate: $("#evtDate").val(),
          eventTime: $("#evtTime").val(),
          gameName: $("#gameName").val()
        };
  
        console.log(newEvent);
  
        // Question: What does this code do??
        $.post("/event/add", newEvent)
          .then(function(data) {
              console.log(data.eventName);
          });
  
      });

      $("#myEvents").on("click", function (event) {
        event.preventDefault();
        // console.log(searchedGame);

        $.get('/myevents', function(results) {
            window.location.href = "/myevents";
        })
    })

    $("#modalViewEvents").on("click", function (event) {
        event.preventDefault();

        $.get('/viewevent', function(results) {
            window.location.href = '/viewevent';
        })
    })

})
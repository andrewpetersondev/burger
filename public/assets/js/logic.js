$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("adding a new burger");
      location.reload();
    });
  });

  // click a burger to eat it
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("burger devoured");
      location.reload();
    });
  });
});

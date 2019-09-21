$(function() {
  // create a burger
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
      
      $("#burger-name").val() = "";
      
      location.reload();
    });
  });

  // click a burger to eat it
  $(".toggle-devoured").on("click", function(event) {

    var id = $(this).data("id");
    
    var newDevoured = $(this).data("newdevoured");
        
    var newDevouredState = {
      devoured: newDevoured
    };

    // console.log(id);

    // sends the put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("burger devoured");
      location.reload();
    });
  });
});

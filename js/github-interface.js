var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".username").empty();
    var username = $("#username").val();
    $("#username").val("");
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      $(".jumbotron").show();
      $(".username").text(username + "'s Public Repositories:");
      console.log(response);
      console.log(response[17].name);
      console.log(response[17].description);
      for (var i = 0; i < response.length; i++) {
        $(".result").append("<h4>Repo Name: " + response[i].name + "</h4>");
        if (response[i].description !== null) {
          $(".result").append("<h5>Description: " + response[i].description + "</h5><br>");
        } else {
          $(".result").append("<h5>No Description</h5><br>");
        }
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

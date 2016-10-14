var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".username").empty();
    $(".result").empty();
    var username = $("#username").val();
    $("#username").val("");
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      if(response.length){
        $(".username").text(username + "'s Public Repositories:");
        for (var i = 0; i < response.length; i++) {
          $(".result").append("<h4>Repo Name: " + response[i].name + "</h4>");
          if (response[i].description) {
            $(".result").append("<h5>Description: " + response[i].description + "</h5><br>");
          } else {
            $(".result").append("<h6>No Description</h6><br>");
          }
        }
      } else {
        $(".username").text(username + " does not have any Public Repositories yet!");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $(".username").text(username + " was not found!");
      $(".result").append("Try Again!");
    });
  });
});

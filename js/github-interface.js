var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".username").empty();
    $(".result").empty();
    var username = $("#username").val();
    $("#username").val("");
    $.get('https://api.github.com/users/' + username + '/repos?page=1?access_token=' + apiKey).then(function(response){
      console.log(response);
      if(response.length){
        if (response.length > 1) {
          $(".username").text(username + "'s " + response.length + " Public Repositories:");
        } else {
          $(".username").text(username + "'s Public Repository:");
        }
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

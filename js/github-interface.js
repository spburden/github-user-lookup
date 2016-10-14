var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".jumbotron").hide();
    $("#inputUsername").empty();
    $(".username").empty();
    $(".result").empty();
    $("#nameOfUser").empty();
    $("#followers").empty();
    $("#following").empty();
    $("#avatar").attr("src", '');
    var username = $("#username").val();
    var newUser = new User();
    newUser.getRepos(username, displayUserRepos);
    newUser.getInfo(username, displayUserInfo);
    $(".jumbotron").show();
    $("#username").val("");
  });
});

var displayUserRepos = function(username, response) {
  if(response.length){
    if (response.length > 1) {
      $("#inputUsername").html("<h2>" + username + "</h2>");
      $(".username").append(username + "'s " + response.length + " Public Repositories:");
    } else {
      $(".username").append(username + "'s Public Repository:");
    }
    for (var i = 0; i < response.length; i++) {
      $(".result").append("<h4>Repo Name: " + response[i].name + "</h4>");
      if (response[i].description) {
        $(".result").append("<h5>Description: " + response[i].description + "</h5>");
      } else {
        $(".result").append("<h6>No Description</h6>");
      }
      $(".result").append("<h5>Date created: " + moment(response[i].created_at).format("dddd MMM Do YYYY") + "</h5><br>");
    }
  } else {
    $(".username").text(username + " does not have any Public Repositories yet!");
  }
};

var displayUserInfo = function(username, response) {
  if(response){
    if(response.followers){
      $("#followers").append("Followers: " + response.followers);
      $("#following").append("Following: " + response.following + "<br>");
    }
    if(response.avatar_url){
      $("#avatar").attr("src", response.avatar_url);
      $("#avatar").show();
    }
    if(response.name){
      $("#nameOfUser").append(response.name);
    }
  }
};

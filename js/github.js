var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=200&access_token=' + apiKey).then(function(response){
    console.log(response);
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
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $(".username").text(username + " was not found!");
    $(".result").append("Try Again!");
  });
};

User.prototype.getInfo = function (username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
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
  });
};

exports.userModule = User;

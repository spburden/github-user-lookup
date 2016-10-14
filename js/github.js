var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=200&access_token=' + apiKey).then(function(response){
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

exports.userModule = User;

var apiKey = require('./../.env').apiKey;

function User() {
}

User.prototype.getRepos = function(username, displayUserRepos, noRepos) {
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&per_page=200&access_token=' + apiKey).then(function(response){
    displayUserRepos(username, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    noRepos(username);
  });
};

User.prototype.getInfo = function (username, displayUserInfo) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayUserInfo(username, response);
  });
};

exports.userModule = User;

var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

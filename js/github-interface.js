var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      console.log(response[17].name);
      console.log(response[17].description);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

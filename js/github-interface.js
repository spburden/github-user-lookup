var apiKey = require('./../.env').apiKey;
var User = require('./../js/github.js').userModule;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var newUser = new User();
    $(".username").empty();
    $(".result").empty();
    $("#username").val("");
    newUser.getRepos(username);
  });
});

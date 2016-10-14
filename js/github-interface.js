var apiKey = require('./../.env').apiKey;
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
    newUser.getRepos(username);
    newUser.getInfo(username);
    $(".jumbotron").show();
    $("#username").val("");
  });
});

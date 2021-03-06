// Scott Nedvesky
// Web API CSCI 3800
// HW3 - The purpose of this assignment is to protect the proxies using OAuth Authorization.

var express = require('express');
var app = express();


// GET PROCEDURE
app.get('/gets', function(req, res){
    console.log("Recieved GET Request");
    var GitHubApi = require("github");
    var github = new GitHubApi({
        version: "3.0.0",
    })

});

var AUTH_TOKEN = "TOKEN"; // Don't put actual value on github
github.authenticate({
    type: "oauth",
    token: AUTH_TOKEN
});

github.repos.getFromUser({user: "snedvesky"}, function(err, res) {
    console.log("ERR?: ", err);
    console.log("RES?", res);
    for (var i = 0, j = res.length; i < j; i += 1) {
        console.log(res[i].language)
    }
});


app.listen(8080, function() {
    var p1 = server.address().port
    var h1 = server.address().address
    console.log("Server running on http://%s:%s", h1, p1)
})

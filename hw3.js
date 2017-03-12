// Scott Nedvesky
// Web API CSCI 3800
// HW3 - The purpose of this assignment is to protect the proxies using OAuth Authorization.

var express = require('express');
var app = express();


// GET PROCEDURE
app.get('/gets', function(req, res){
    console.log("Recieved GET request");
    var GitHubApi = require("github");
    var github = new GitHubApi({
        version: "3.0.0"
    });


    var token = "2b2bbec5601e224fd0784609d1ee4e1c51fddd02";
    github.authenticate({
        type: "oauth",
        token: token
    });

    github.user.get({ user: 'snedvesky'} , function(err, resp) {

        console.log("ERRors?", err);
        console.log("RESponse?", resp);
        res.send(resp);

        github.repos.getAll({}, function(err, res) {
            console.log("ERRors?", err);
            console.log("RESponse?", res);
        });
    });

    console.log("test1");
})

/*  404 Errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }
    res.send(err.message || ' nada ');
});
*/

app.listen(8080, function() {
    var p1 = server.address().port
    var h1 = server.address().address
    console.log("Server running on http://%s:%s", h1, p1)

})
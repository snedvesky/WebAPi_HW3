// Scott Nedvesky
// Web API CSCI 3800
// HW3 - The purpose of this assignment is to protect the proxies using OAuth Authorization.
import GitHub from 'github-api';
var express = require('express');
var app = express();


// GET PROCEDURE
app.get('/gets', function(req, res){
    console.log("Recieved GET Request");
    var GitHubApi = require("github");
    var github = new GitHubApi({
        version: "3.0.0"
    });

    var Accesstoken = "token";
    github.authenticate({
        type: "oauth",
        token: Accesstoken
    });

    github.user.get({ user: 'snedvesky'} , function(err, resp) {
        console.log("Response: ", resp);
        console.log("Errors: ", err);
        res.send(resp);

        github.repos.getAll({}, function(err, res) {
            console.log("Response: ", res);
            console.log("Errors: ", err);
        });
    });

  
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
    console.log("Server running on http://%s:%s", server.address().port, server.address().port)

})

var instance = function() {};

var server = false;
var request = require('request');

instance.route = "/api/projectStatus";
instance.cacheDuration = "10 seconds";

instance.configure = function(config) {
    server = config.server;
}

instance.render = function(req, res) {
    var data = {};
    var url = 'http://10.10.32.96:8000/?project=portfolio&type=tasks';

    request(url, function(error, response, body) {
        if (body) {
            try {
                var newBody = "{" + body.replace('tasks:', '"tasks":') + "}";
                console.log("Trying to parse ", newBody);
                data = JSON.parse(newBody);
                res.jsonp(data);
            } catch (exception) {
                console.log("Issue parsing body ", exception, body)
                data.error = exception;
                res.jsonp(data);
            }
        } else {
            console.log("No body returned", error);
            data.error = error;
            res.jsonp(data);
        }
    });
}

module.exports = instance;

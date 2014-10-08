var async = require('async');
var ext = require('./extensions.js');
var Request = require('./request.js');
var repository = require('./repository.js');
var counter = require('./counter.js');

module.exports.process = process;
module.exports.getCount = getCount;

function process(req, res) {
    var parameters = req.query,
        data = new Request(parameters);

    async.series([
        function (callback) {
            repository.save(data.getData(), function(err, repl) {
                    callback(err, repl);
                });
        },
        function (callback) {
            if (data.hasCount())
                counter.increment(function(err, repl) {
                    callback(err, repl);
                });
        }],
        function(err, results){
            if (err)
                ext.writeResponse(res, 400, err.toString());        
            else 
                ext.writeResponse(res, 200, "OK");        
        });
}

function getCount(req, res) {
    async.series([
        function (callback) {
            counter.getCount(function(err, repl) {
                    callback(err, repl);
                }
            );
        }],
        function(err, results) {
            if (err)
                ext.writeResponse(res, 400, err.toString());        
            else 
                ext.writeResponse(res, 200, results[0].toString());        
        });
}

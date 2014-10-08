var fs = require('fs');

var fileName = './request.json';

function save(data, callback) {
    fs.appendFile(fileName, data, function(err) {
        if (callback)
            callback(err);
    });   
}

function read(callback) {
    fs.readFile(fileName, function(err, reply) {
        if (callback)
            callback(err, reply);
    });   
}

function clear(callback) {
    fs.truncate(fileName, 0, function(err) {
        if (callback)
            callback(err);
    });   
}

module.exports.read = read;
module.exports.clear = clear;
module.exports.save = save;

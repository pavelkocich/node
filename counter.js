var redis = require("redis");
var redisClient = redis.createClient();
    
redisClient.on("error", function (err) {
    console.log("Count incrementation error: " + err);
  });

function increment(callback) {
    var count;
    redisClient.incrby("count", 1, function(err, reply) {
        if (callback)
            callback(err, reply);
    });
};

function getCount(callback) {
    redisClient.get("count", function (err, reply) { 
        if (callback)
            callback(err, reply);
    });    
};

function reset(callback) {
    redisClient.set("count", 0, function (err, reply) { 
        if (callback)
            callback(err, reply);
    });    
}

module.exports.getCount = getCount;
module.exports.reset = reset;
module.exports.increment = increment;
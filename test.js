var mocha = require('mocha');
var async = require('async');
var chai = require('chai');
var Request = require('./request.js');
var counter = require('./counter.js');
var repository = require('./repository.js');

mocha.describe("request", function() {
   mocha.describe("hasCount", function() {
        mocha.it("Standard request without count", function(done) {
            var parameters = {parameter1 : "value1", parameter2 : "value2"},
               data = new Request(parameters),
               result = data.hasCount();
            
            chai.expect(result).equal(false);
            done();
        });
        mocha.it("Standard request with count", function(done) {
            var parameters = {parameter1 : "value1", parameter2 : "value2", count : ""},
               data = new Request(parameters),
               result = data.hasCount();
            
            chai.expect(result).equal(true);
            done();
        });
    });
});

mocha.describe("counter", function() {
   mocha.describe("increment", function() {
        mocha.beforeEach(function(done) {
            counter.reset(function(err, repl) {
                            done();
                        });
            });
        mocha.it("First increment", function(done) {
            counter.increment(function(err, repl) {
                            chai.expect(repl).equal(1);
                            done();
                        });
      });
   });
});
           
mocha.describe("repository", function() {
   mocha.describe("save", function() {
        mocha.beforeEach(function(done) {
            console.log("je to tu");
            repository.clear(function(err, repl) {
                            done();
                        });
            });
        mocha.it("Save request", function(done) {
            var parameters = {paremeter1 : "value1", parameter2 : "value2"},
                request = new Request(parameters),
                data = request.getData();
            
            async.series([
                function (callback) {
                    repository.save(data, function(err, repl) {
                            callback(err, repl);
                        });
                },
                function (callback) {
                    repository.read(function(err, repl) {
                            callback(err, repl);
                        });
                }],
                function(err, results){
                    if (err)
                        chai.fail("No error",err);
                    else
                        chai.expect(results[1].toString()).equal(data);
                    
                    done();
                });
      });
   });
});
           
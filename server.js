var http = require('http'),
    express = require('express'),
    controller = require('./requestController.js');
    
module.exports.start = start;

start();

function start(route) {
  var app = express();

  //https://node-c9-pavelkocich.c9.io/controller/process/?param1=ahoj&param2=nazdar&dalsiparam=cus&count
  //https://node-c9-pavelkocich.c9.io/controller/getCount/
  app.get('/controller/process/', controller.process);
  app.get('/controller/getCount/', controller.getCount);

  var server = http.createServer(app);
  server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",
    function() {
      var addr = server.address();
      console.log("Server listening at ", addr.address + ":" + addr.port);
      });
      
}

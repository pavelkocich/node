var Mocha = require("mocha");

var mocha = new Mocha();
mocha.addFile("./test.js");

mocha.ui("exports")
    .reporter( function(r) {
        var i = 1, 
            n = r.grepTotal(r.suite);
        r.on("fail", function(t){ console.log("\x1b[31m[%d/%d] %s FAIL\x1b[0m", i++, n, t.fullTitle()); });
        r.on("pass", function(t){ console.log("\x1b[32m[%d/%d] %s OK\x1b[0m", i++, n, t.fullTitle()); });
        r.on("pending", function(t){ console.log("\x1b[33m[%d/%d] %s SKIP\x1b[0m", i++, n, t.fullTitle()); });
    })
    .addFile(__filename)
    .run(process.exit);

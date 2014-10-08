{"changed":true,"filter":false,"title":"request.js","tooltip":"/request.js","value":"var ext = require(\"./extensions.js\");\n\nmodule.exports = Request;\n\nRequest.prototype.hasCount = hasCount;\nRequest.prototype.getData = getData;\n\nfunction Request(data) {\n    this._parameters = data;\n}\n\nfunction hasCount() {\n    return !ext.isEmpty(this._parameters[\"count\"]);\n}\n\nfunction getData() {\n    return JSON.stringify(this._parameters, null, 4);\n}\n\n","undoManager":{"mark":89,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":25},"end":{"row":15,"column":26}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":24},"end":{"row":15,"column":25}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":23},"end":{"row":15,"column":24}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":22},"end":{"row":15,"column":23}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":21},"end":{"row":15,"column":22}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":20},"end":{"row":15,"column":21}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":19},"end":{"row":15,"column":20}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":18},"end":{"row":15,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":18},"end":{"row":15,"column":19}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":19},"end":{"row":15,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":20},"end":{"row":15,"column":21}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":21},"end":{"row":15,"column":22}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":22},"end":{"row":15,"column":23}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":23},"end":{"row":15,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":24},"end":{"row":15,"column":25}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":35},"end":{"row":15,"column":36}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":36},"end":{"row":15,"column":37}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":37},"end":{"row":15,"column":38}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":36},"end":{"row":15,"column":37}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":35},"end":{"row":15,"column":36}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":34},"end":{"row":15,"column":35}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":33},"end":{"row":15,"column":34}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":32},"end":{"row":15,"column":33}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":31},"end":{"row":15,"column":32}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":30},"end":{"row":15,"column":31}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":29},"end":{"row":15,"column":30}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":28},"end":{"row":15,"column":29}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":28},"end":{"row":15,"column":29}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":29},"end":{"row":15,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":30},"end":{"row":15,"column":31}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":31},"end":{"row":15,"column":32}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":32},"end":{"row":15,"column":33}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":33},"end":{"row":15,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":34},"end":{"row":15,"column":35}},"text":"z"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":35},"end":{"row":15,"column":36}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":35},"end":{"row":15,"column":36}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":34},"end":{"row":15,"column":35}},"text":"z"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":34},"end":{"row":15,"column":35}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":17,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":16},"end":{"row":10,"column":17}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":15},"end":{"row":10,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":14},"end":{"row":10,"column":15}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":13},"end":{"row":10,"column":14}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":13}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":11},"end":{"row":10,"column":12}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":10},"end":{"row":10,"column":11}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":9},"end":{"row":10,"column":10}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":9},"end":{"row":10,"column":10}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":10},"end":{"row":10,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":11},"end":{"row":10,"column":12}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":12},"end":{"row":10,"column":13}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":13},"end":{"row":10,"column":14}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":14},"end":{"row":10,"column":15}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":15},"end":{"row":10,"column":16}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":3,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":2,"column":0},"end":{"row":3,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":14,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":17}},"text":"Request.prototype"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":17},"end":{"row":14,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":18},"end":{"row":14,"column":19}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":19},"end":{"row":14,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":20},"end":{"row":14,"column":21}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":21},"end":{"row":14,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":22},"end":{"row":14,"column":23}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":23},"end":{"row":14,"column":24}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":24},"end":{"row":14,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":25},"end":{"row":14,"column":26}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":26},"end":{"row":14,"column":27}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":27},"end":{"row":14,"column":28}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":28}},"text":"Request.prototype = Request;"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":13,"column":0},"end":{"row":14,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":9},"end":{"row":3,"column":10}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":30},"end":{"row":11,"column":31}},"text":"."},{"action":"insertText","range":{"start":{"row":11,"column":30},"end":{"row":11,"column":31}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":30},"end":{"row":11,"column":31}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":28},"end":{"row":7,"column":29}},"text":"."},{"action":"insertText","range":{"start":{"row":7,"column":28},"end":{"row":7,"column":29}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":28},"end":{"row":7,"column":29}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":25}},"text":"module.exports = Request;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":25}},"text":"module.exports = Request;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":25},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"¨"},{"action":"insertText","range":{"start":{"row":1,"column":1},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":16,"column":0},"end":{"row":19,"column":0}},"nl":"\n","lines":["Request.prototype.hasCount = hasCount;","Request.prototype.getData = getData;",""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":38}},"text":"Request.prototype.hasCount = hasCount;"},{"action":"insertText","range":{"start":{"row":4,"column":38},"end":{"row":5,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":5,"column":0},"end":{"row":7,"column":0}},"lines":["Request.prototype.getData = getData;",""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":6,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"¨"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":26},"end":{"row":8,"column":32}},"text":".query"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":17},"end":{"row":7,"column":20}},"text":"req"},{"action":"insertText","range":{"start":{"row":7,"column":17},"end":{"row":7,"column":18}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":18},"end":{"row":7,"column":19}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":19},"end":{"row":7,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":20},"end":{"row":7,"column":21}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":25},"end":{"row":8,"column":26}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":24},"end":{"row":8,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":23},"end":{"row":8,"column":24}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":23},"end":{"row":8,"column":24}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":24},"end":{"row":8,"column":25}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":25},"end":{"row":8,"column":26}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":26},"end":{"row":8,"column":27}},"text":"a"}]}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":0},"end":{"row":10,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1412626366557}
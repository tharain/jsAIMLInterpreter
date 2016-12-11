var AIMLParser = require('./AIMLParser');
var aiml = new AIMLParser({name:'WireInterpreter', age:'42'});

var callback = function(){
	//do nothing
};

aiml.load(callback);
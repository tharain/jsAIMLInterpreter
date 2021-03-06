/**
 *
 * This program reads the aiml file and runs the program
 *
**/

// this are modules to handle input/output.
var io = require('fs');
var path = require('path');
var process = require('process');

//this are modules that handle aiml xml specific
var DomJS = require('dom-js').DomJS;
var domjs = new DomJS();
var random = require("random-js")();

// initialize variables
var params = {};

var domArr = [];
var domTotal = 0;

var prevRandomReply = '';
var randomReplyArr = [];

var prevAns = '';

var isLoaded = false;

//initialize AIML module
var AIMLParser = function(parameters){
	var self = this;
	
	params = parameters;
	
	// 1st function: load all the AIML files
	this.load = function(cb){
		// .:: step 1: LOOP through all the files ::.
		if(!isLoaded){
			var currentDir = "./aiml";
			
			io.readdir(currentDir, function(err, files){
				if(err){
					console.error("Error: Failed to open directory", err);
					process.exit(1);
				}
				
				files.forEach(function(file,index){
					var dirFile = path.join(currentDir,file);
					
					io.stat(dirFile, function(error, stat){
						if(error){
							console.error("Error: Failed to analyse file.");
							return;
						}
						if(stat.isFile()){
							// .:: step 2: OPEN individual files to read ::.
							io.readFile(dirFile, 'utf8', function (err,data) {
								if(err){
									console.error("Error: Failed to read file:" + dirFile);
									return;
								}
								// .:: step 3: STORE the parsed data ::.
								domjs.parse(data, function(err, dom){
									if(err){
										console.error("Error: Failed to parse XML file.");
										return;
									}
									if(dom.name == ! 'aiml'){
										console.error("Error: File is NOT aiml.");
										return;
									}
									domArr[domTotal] = dom;
									++domTotal;	
									console.log("read file: " + dirFile);
								});
								domjs.reset();
							});
						}
					});
				});
				var loadWrapper = function(cb){
					return function(){
						if(domTotal == files.length){
							isLoaded = true;
							return cb();
						}
					};
				};

				if(domTotal != files.length){
					setTimeout(loadWrapper(cb), 100);
				}
			});
		}
	};
	
	// 2nd function: return the phrase
	this.reply = function(inputStr,cb){
		// .:: step 1: load the aiml file just in case if its not loaded. ::.
		var finalReply = this.load(replycb1);
		
		return finalReply;
	}
	
	this.debug = function(){
		console.log("AIML files loaded successfully.");
		console.log("<-- START OF DEBUG -->: " + domTotal);
		for(var i=0; i<domTotal; ++i){
			console.log(domArr[i]);
			console.log();
		}
		console.log("<-- END OF DEBUG -->");
	};
}

// Functions listed below are support functions.
var replycb1 = function(inputStr){
	clientInput = clientInput.toLowerCase();
	randomReplyArr = [];
	var reply = '';
	// .:: step 1: text-parsing. remove all spaces from dom
	for(var index=0; index<domArr.length; ++index){
		removeSpaceFromDom(domArray[i].children);
	}
}

var removeSpaceFromDom(){
	//do nothing
}

module.exports = AIMLParser;
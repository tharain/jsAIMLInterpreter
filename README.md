# jsAIMLInterpreter

# ** Disclaimer: This code has no relevance to the original authors of aiml. **

## Dependencies
1. dom-js
2. random-js

## Installation
1. This is a self-project solely for Nodejs only.
2. Installation of these dependencies: 'dom-js' and 'random-js'
3. Make sure you have Nodejs installed on your Operating System.

## Getting started
1. Clone or Download the Package.
2. On your command prompt, goto the directory and type 'npm install'.
3. You can open the 'demo.js' to see a sample code.
4. Store your .aiml files in a folder called 'aiml' in the same directory as your running code.
  1. Example, if I am writing a code aimlbot.js on C:/test/
  2. Add a aiml folder such that the directory becomes C:/test/aiml/
  3. Add all your test1.aiml, test.aiml into the directory C:/test/aiml/
5. To use this API, you can type these to your code headers:
``` javascript
var AIMLParser = require('./path/.../AIMLParser');
var aiml = new AIMLParser({name:'bot name', age:'bot age'});
```

## API
``` javascript
var isLoaded = false;

var callback = function(){
  // do nothing
};

//loading the AIML files
aiml.load(function(){
  isLoaded = true;
});

var yourFunction = function(message, inputStr, replyMessage, callback){
    while(!isLoaded){
      var message = aiml.reply(message, callback);
      // ... use message here
    }
};
// you can use a reply wrapper and set a timeout if you want to have continuous reply stream.
```

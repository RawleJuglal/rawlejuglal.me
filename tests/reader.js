//These are node modules that we are requiring to run this code
var fs = require('fs');

//-------------------------------------------
//The following should show how it is asynchronous
console.log("About to Read File");

fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log("Unable to read file test.txt");
    } else {
        console.log("File Contents:");
        console.log(data.toString());
    }
});

console.log("Called fs.readFile()\n");

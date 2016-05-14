//These are node modules that we are requiring to run this code
var printer = require('./custom_modules/printer');

//The printer module function print takes one param(string of file you want to read)
//if the file does not exist it will create a new one, if it does exist it will throw an error
//the file will print to printer-sample.txt
printer.print(process.argv[2]);
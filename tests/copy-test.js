//These are node modules that we are requiring to run this code
var copier = require('./custom_modules/copier');

//The copier module function copy takes two params(file you want to read,file you want to write to)
//if the file does not exist it will create a new one
//**CAREFUL** if you chose a file that is created it will write over it without prompting you
copier.copy(process.argv[2],process.argv[3]);
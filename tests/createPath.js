//These are node modules that we are requiring to run this code
var pather = require('./custom_modules/pather');

var base = process.cwd();
var userInput = ['/public/css','main.css'];

userInput.unshift(base);

pather.parse(process.cwd());

pather.normalize('../user//party/app/views/../okay');

var target = pather.join.apply(null, userInput);
console.log(target);
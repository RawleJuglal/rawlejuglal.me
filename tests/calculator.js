//Importing a module to use in a file is providing the path to the file instead of an alias while leaving off the file extension.
var circle = require('./custom_modules/circle');

//Access the functions as you would on built-in modules with the object dot notation:
var area = circle.area(10);
console.log(area);

var PI = Math.PI;

//Every module -- has its own scope. The functions in a file are not available to other parts of an application unless they are explicitly exported. 
//To export a function or some other bit of data in a file, attach it to the exports object just as you attach a property to a normal javascript object
module.exports = {
    area: function (r) {
        return PI * r * r;
    },
    circumference: function (r) {
        return 2 * PI * r;
    }
};


                           //VISUALLY> 
          //var exports = {
                            //key'area': value 'function area',
                            //key'circumference':value'function circumference'
                        //}
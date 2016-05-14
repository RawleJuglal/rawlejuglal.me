var fs = require('fs');

module.exports = {
    print: function(file){
      fs.open('public/printer-sample.txt','wx',(err,fd)=>{
        if(err)
            {
                console.log(err);
            }
        else
            {
                fs.readFile(file,(err,data)=>{
                    if(err)
                        {
                            console.log(err);
                        }
                    else
                        {
                            var text = data;
                            fs.writeFile('public/printer-sample.txt',text,'utf8',(err)=>{
                                if(err)
                                    {
                                        console.log(err);
                                    }
                                else
                                    {
                                        console.log('Write is successful');
                                    }
                            })
                        }
                })
            }
      });  
    }
};
var fs = require('fs');

module.exports = {
    copy: function(file, path){
      fs.open(path,'w',(err,fd)=>{
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
                            fs.writeFile(path,text,'utf8',(err)=>{
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
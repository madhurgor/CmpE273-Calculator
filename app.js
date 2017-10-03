var express=require('express');
var calcController=require('./controller/calcControllers');
var app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));
calcController(app);

app.listen(3000,function(){
  console.log('listening to port 3000....');
})

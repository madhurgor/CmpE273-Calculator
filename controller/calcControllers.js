var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('calc');
  });
  app.post('/',urlencodedParser,function(req,res){
    if(isNaN(req.body.n1) || isNaN(req.body.n2) || req.body.n1=='' || req.body.n2=='') res.json('One of the inputs is not a number or empty..');
    else {
      if(req.body.n3=="a") res.json(Number(req.body.n1)+Number(req.body.n2));
      else if(req.body.n3=="s") res.json(Number(req.body.n1)-Number(req.body.n2));
      else if(req.body.n3=="m") res.json(Number(req.body.n1)*Number(req.body.n2));
      else res.json(Number(req.body.n1)/Number(req.body.n2));
    }
  });
}

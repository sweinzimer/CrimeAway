//Adam Deaton, cs361, Hw7, 6-8-2018

var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', '8912');

app.get('/', function(req,res){
	res.render('home');
});

app.get('/reportcrime',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM report', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('reportcrime', context);
  });
});

app.get('/insert-crimereport',function(req,res,next){
  var context = {};
  var cData = {"userid":999, "title":"lholder", "description":"holder", "street":"sholder", "city":"cholder","state":"sholder","date":"hold","status":"holder","severity":1,"crimetype":"holder"};
  mysql.pool.query("INSERT INTO report (`userid`,`title`,`description`,`street`,`city`,`state`,`date`,`status`,`severity`,`crimetype`) VALUES (?,?,?,?,?,?,?,?,?,?)", [req.query.userid, req.query.title, req.query.description, req.query.street, req.query.city, req.query.state, req.query.date, req.query.status, req.query.severity, req.query.crimetype], function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Inserted id " + result.insertId;
    res.render('reportcrime',context);
  });
});

app.get('/edit',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM user WHERE id=?', [req.query["id"]], function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('edit-user', context);
  });
});

app.get('/edit-user-data',function(req,res,next){
  var context = {};
  mysql.pool.query("UPDATE user SET first_name=?, last_name=?, email=?, pass=?vWHERE id=? ",
    [req.query.first_name, req.query.last_name, req.query.email, req.query.pass, req.query.id],
    function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Updated";
    res.render('edit-user',context);
  });
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

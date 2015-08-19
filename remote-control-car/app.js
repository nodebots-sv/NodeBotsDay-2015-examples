var express = require('express');
var app = express(),
  keypress = require('keypress'),
  five = require('johnny-five'),
  board = five.Board(),
  configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1,
  bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/bower',  express.static(__dirname + '/bower_components'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/control', function (req, res) {
  res.render('app');
});

board.on('ready', function() {
  console.log('International NodeBots Day - El Salvador');
  console.log('Controlar carrito desde teclado con Node.js');
  app.post('/remote', function(req, res){
    var m1 = new five.Motor(configs.M1);
      m2 = new five.Motor(configs.M2);
      m3 = new five.Motor(configs.M3),
      m4 = new five.Motor(configs.M4);

    switch (req.body.btn) {
      case 'q':
        console.log('Saliendo...');
        process.exit();
        res.send("saliendo");
        break;
      case 'up':
        console.log('Adelante');
        adelante();
        res.send("adelante");
        break;
      case 'down':
        console.log('Atras');
        atras();
        res.send("atras");
        break;
      case 'stop':
        console.log('Detener');
        detener();
        res.send("detener");
        break;
      default:
        break;
    }

    function adelante() {
      m1.forward(255);
      m2.forward(255);
      m3.forward(255);
      m4.forward(255);
    }

    function atras() {
      m1.reverse(255);
      m2.reverse(255);
      m3.reverse(255);
      m4.reverse(255);
    }

    function detener() {
      m1.stop(255);
      m2.stop(255);
      m3.stop(255);
      m4.stop(255);
    }
  });
});




var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('NodeBots App corriendo en http://%s:%s', host, port);
});

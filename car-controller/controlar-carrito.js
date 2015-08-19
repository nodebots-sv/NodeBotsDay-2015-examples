var keypress = require('keypress'),
  five = require('johnny-five'),
  board = five.Board(),
  configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;


board.on('ready', function() {
  console.log('International NodeBots Day - El Salvador');
  console.log('Controlar carrito desde teclado con Node.js');
  var m1 = new five.Motor(configs.M1),
    m2 = new five.Motor(configs.M2),
    m3 = new five.Motor(configs.M3),
    m4 = new five.Motor(configs.M4);

  //hacer que `process.stdin` emita eventos "mousepress" (y "keypress")
  keypress(process.stdin);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);

  // escuchar eventos de teclado
  process.stdin.on('keypress', function (ch, key) {
    if (!key) return ;

    //Acciones segun tecla presionada
    switch (key.name) {
      case 'q':
        console.log('Saliendo...');
        process.exit();
        break;
      case 'up':
        console.log('Adelante');
        adelante();
        break;
      case 'down':
        console.log('Atras');
        atras();
        break;
      case 'space':
        console.log('Detener');
        detener();
        break;
      default:
        break;
    }

  });

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

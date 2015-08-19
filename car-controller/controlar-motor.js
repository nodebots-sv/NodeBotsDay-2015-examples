var keypress = require('keypress'),
  five = require('johnny-five'),
  board = five.Board(),
  configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;


board.on('ready', function() {
  console.log('International NodeBots Day - El Salvador');
  console.log('Controlar motor desde teclado con Node.js');
  var m1 = new five.Motor(configs.M1);
  //hacer que `process.stdin` emita eventos "mousepress" (y "keypress")
  keypress(process.stdin);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);

  process.stdin.on('keypress', function (ch, key) {
    if (!key) return ;

    switch (key.name) {
      case 'q':
        console.log('Saliendo');
        process.exit();
        break;
      case 'up':
        console.log('Adelante');
        m1.forward(255);
        break;
      case 'down':
        console.log('Atras');
        m1.reverse(255);
        break;
      case 'space':
        console.log('Detener');
        m1.stop();
        break;
      default:
        break;
    }

  });
});

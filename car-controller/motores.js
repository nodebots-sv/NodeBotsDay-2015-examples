var five = require('johnny-five'),
  board = five.Board(),
  configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;


board.on('ready', function() {
  console.log('International NodeBots Day - El Salvador');
  console.log('Controlar motores con Node.js');
  var m1 = new five.Motor(configs.M1),
    m2 = new five.Motor(configs.M2),
    m3 = new five.Motor(configs.M3),
    m4 = new five.Motor(configs.M4);

  m1.start(255);
  m2.start(255);
  m3.reverse(255);
  m4.reverse(255);
});

var five = require('johnny-five'),
  board = five.Board();

board.on('ready', function() {
  console.log('International NodeBots Day - El Salvador');
  console.log('Controlar Servomotor con Node.js');
  var s1 = new five.Servo(9);
  s1.sweep();
});

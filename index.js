var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
	var mic = new five.Sensor({
	  	pin: 'PI-13'
	});
	mic.on("change", function() {
		console.log(this.value);
	});
  //var led = new five.Led("P1-13");
  //led.blink();
});
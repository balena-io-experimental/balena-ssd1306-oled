{
  const i2c = require('i2c-bus');
  const font = require('oled-font-5x7');
  const pngtolcd = require('png-to-lcd');
  const opts = {
    width: parseInt(process.env.OLED_WIDTH) || 128,
    height: parseInt(process.env.OLED_HEIGHT) || 32,
    bus: parseInt(process.env.OLED_I2C_BUS) || 1,
    address: parseInt(process.env.OLED_I2C_ADDRESS) || 0x3c
  };
  const i2cBus = i2c.openSync(opts.bus);
  const oledBus = require('oled-i2c-bus');
  const oled = new oledBus(i2cBus, {
    width: opts.width,
    height: opts.height,
    address: opts.address
  });

  oled.clearDisplay();
  oled.dimDisplay(parseInt(process.env.OLED_DIM) || 0);
  oled.invertDisplay(parseInt(process.env.OLED_INVERT) || 0);
  oled.turnOnDisplay();
  oled.setCursor(1, 1);
  /* pngtolcd(__dirname + '/assets/favicon.png', true, (err, bitmap) => {
    'use strict';
    oled.buffer = bitmap;
    oled.update();
  }); */
  oled.writeString(font, 1, 'UUID: ' + process.env.RESIN_DEVICE_UUID.substring(0, 7), 1, true);
  oled.setCursor(1, 10);
  oled.writeString(font, 1, process.env.OLED_TEXT, 1, true);
}

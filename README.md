# resin-ssd1306-oled

A simple resin.io application for controlling a SSD1306 OLED screen via I2C and showing useful informations

![top-view pic](http://i.imgur.com/kD9JlWAm.jpg)

### Configuration via environment variables

Environment Variable | Default | Description
------------ | ------------- | -------------
OLED_WIDTH | `128` | the number of pixels on the X axis
OLED_HEIGHT | `32` | the number of pixels on the Y axis
OLED_I2C_BUS | `1` | the i2c bus on which the screen is connected
OLED_I2C_ADDRESS | `0x3c` | the i2c address on which the screen is connected
OLED_DIM | `0` | if set to `1`, dims the screen
OLED_INVERT | `0` | if set to `1`, inverts the saturation
OLED_TEXT | `null` | the string to display (under the short UUID)

/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitAmbientlight'] = function (block) {
        Blockly.Python.imports_["k230InitAmbientlight"] = `from machine import I2C\n`
        var arg0 = block.getFieldValue('I2C') || '1';
        arg0 = parseInt(arg0)
        var code =
            `
i2c = I2C(${arg0})
BH1750_ADDRESS = 35
BH1750_POWER_ON = 0x01
BH1750_MEASURE_HIGH_RES = 0x10
BH1750_READ_DATA = 0x11

def read_lux_from_bh1750():
    i2c.writeto_mem(BH1750_ADDRESS, BH1750_POWER_ON, bytearray([BH1750_MEASURE_HIGH_RES]))
    time.sleep_ms(120)  # 等待传感器完成一次高分辨率测量（大约120ms）

    data = i2c.readfrom_mem(BH1750_ADDRESS, BH1750_READ_DATA, 2)
    print(data)

    high_byte = data[0]
    low_byte = data[1]
    lux_value = (high_byte << 8) | low_byte

    return lux_value\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadAmbientlight'] = function (block) {
        var code = `read_lux_from_bh1750()`
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

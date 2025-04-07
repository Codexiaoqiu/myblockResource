/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitUltrasound'] = function (block) {
        Blockly.Python.imports_["k230InitUltrasound"] = `import utime\n`
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PINS1') || '3';
        arg1 = parseInt(arg1)
        var code =
            `
def getDistance(trigger, echo):
    # 产生10us的方波
    trigger.low()
    utime.sleep_us(2)
    trigger.high()
    utime.sleep_us(10)
    trigger.low()

    while echo.value() == 0:
        start = utime.ticks_us()
    while echo.value() == 1:
        end = utime.ticks_us()
    d = (end - start) * 0.0343 / 2
    return d
trigger${arg0} = Pin(${arg0}, Pin.OUT)
echo${arg1} = Pin(${arg1}, Pin.IN)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadUltrasound'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('PINS1') || '3';
        arg1 = parseInt(arg1)

        var code = `getDistance(trigger${arg0}, echo${arg1})`
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

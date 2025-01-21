/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitReedPipe'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `reedPipe${arg0} = Pin(${arg0}, Pin.IN, Pin.PULL_UP)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadReedPipe'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `reedPipe${arg0}.value()`
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

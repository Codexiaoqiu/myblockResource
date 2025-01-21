/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitRaindrop'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `rainDrop${arg0} = Pin(${arg0}, Pin.IN)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadRaindrop'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `rainDrop${arg0}.value()`
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

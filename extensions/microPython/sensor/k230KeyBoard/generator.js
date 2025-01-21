/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitKeyBoard'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `button${arg0} = Pin(${arg0}, Pin.IN, Pin.PULL_UP)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadKeyBoard'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `button${arg0}.value()`
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

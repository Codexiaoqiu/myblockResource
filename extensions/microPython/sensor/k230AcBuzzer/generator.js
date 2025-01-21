/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
    Blockly.Python['microbit_k230Peripheral_k230InitAcBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)

        var code = `acBuzzer${arg0} = Pin(${arg0}, Pin.OUT)\n`
        return code;
    };

    Blockly.Python['microbit_k230Peripheral_k230ReadAcBuzzer'] = function (block) {
        var arg0 = block.getFieldValue('PINS') || '2';
        arg0 = parseInt(arg0)
        var arg1 = block.getFieldValue('TYPE') || '1';
        arg1 = parseInt(arg1)

        var code = `acBuzzer${arg0}.value(${arg1})\n`
        return code
    };

    return Blockly;
}

exports = addGenerator;
